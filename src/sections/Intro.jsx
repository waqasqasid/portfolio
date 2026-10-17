import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, RotateCw } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

// Drop the video at public/intro.mp4 (BASE_URL keeps it working under /portfolio/).
// The root-base build (InfinityFree) can't host files over 10 MB, so it streams the GitHub Pages copy.
const VIDEO_SRC =
  import.meta.env.BASE_URL === '/'
    ? 'https://waqasqasid.github.io/portfolio/intro.mp4#t=0.1'
    : `${import.meta.env.BASE_URL}intro.mp4#t=0.1`

const CORNERS = [
  'left-0 top-0 border-l-2 border-t-2 rounded-tl-xl',
  'right-0 top-0 border-r-2 border-t-2 rounded-tr-xl',
  'left-0 bottom-0 border-l-2 border-b-2 rounded-bl-xl',
  'right-0 bottom-0 border-r-2 border-b-2 rounded-br-xl',
]

const SKIP_SECONDS = 10

// Fixed positions so sparkles don't jump between renders.
const SPARKLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 41 + 7) % 100}%`,
  top: `${(i * 23 + 13) % 100}%`,
  size: 2 + (i % 3),
  delay: `${-((i * 0.7) % 3)}s`,
}))

const formatTime = (t) => {
  if (!Number.isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function Intro() {
  const videoRef = useRef(null)
  const barRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [hoverRatio, setHoverRatio] = useState(null)
  const [skipFlash, setSkipFlash] = useState(null)

  // Subtle 3D tilt that follows the cursor.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetTilt = () => {
    mx.set(0)
    my.set(0)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().catch((err) => console.error('Intro video failed to play:', err))
      setStarted(true)
    } else {
      v.pause()
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const goFullscreen = () => videoRef.current?.requestFullscreen?.()

  const seekTo = (time) => {
    const v = videoRef.current
    if (!v?.duration) return
    v.currentTime = Math.min(Math.max(time, 0), v.duration)
    setCurrentTime(v.currentTime)
  }

  const skip = (seconds) => {
    const v = videoRef.current
    if (!v) return
    seekTo(v.currentTime + seconds)
    setSkipFlash({ dir: seconds > 0 ? 'fwd' : 'back', key: Date.now() })
  }

  const ratioFromPointer = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    return Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
  }

  // Pointer capture keeps the scrub going even if the cursor leaves the bar.
  const handleBarDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
    seekTo(ratioFromPointer(e) * duration)
  }

  const handleBarMove = (e) => {
    const ratio = ratioFromPointer(e)
    setHoverRatio(ratio)
    if (dragging) seekTo(ratio * duration)
  }

  const handleBarUp = () => setDragging(false)

  const handleKeyDown = (e) => {
    const actions = {
      ' ': togglePlay,
      k: togglePlay,
      ArrowLeft: () => skip(-5),
      ArrowRight: () => skip(5),
      j: () => skip(-SKIP_SECONDS),
      l: () => skip(SKIP_SECONDS),
      m: toggleMute,
      f: goFullscreen,
    }
    const action = actions[e.key]
    if (!action) return
    e.preventDefault()
    action()
  }

  const progress = duration ? currentTime / duration : 0
  const showControls = !playing || dragging

  return (
    <section id="intro" className="relative isolate overflow-x-clip pb-16 pt-14 sm:pb-24 sm:pt-20 md:pb-32 md:pt-28">
      {/* Animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Perspective grid floor drifting toward the viewer */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] [perspective:600px]">
          <div
            className="absolute inset-x-[-50%] bottom-[-30%] top-0 animate-grid-scroll opacity-40 [transform:rotateX(65deg)]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgb(var(--signal-cyan) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--signal-cyan) / 0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'linear-gradient(to top, #000 10%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to top, #000 10%, transparent 90%)',
            }}
          />
        </div>

        {/* Rings radiating out from behind the player */}
        {[0, 2, 4].map((delay) => (
          <span
            key={delay}
            className="absolute left-1/2 top-[58%] aspect-square w-[min(90vw,900px)] animate-ring-pulse rounded-full border border-signal-cyan/40"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}

        {/* Drifting color blobs */}
        <div className="absolute left-[5%] top-[25%] h-64 w-64 animate-blob rounded-full bg-signal-blue/20 blur-[100px]" />
        <div className="absolute right-[5%] top-[45%] h-72 w-72 animate-blob rounded-full bg-signal-violet/20 blur-[100px] [animation-delay:5s]" />

        {/* Twinkling sparkles */}
        {SPARKLES.map((p, i) => (
          <span
            key={i}
            className="absolute animate-twinkle rounded-full bg-signal-cyan shadow-[0_0_10px_rgb(var(--signal-cyan)/0.9)]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="intro"
          title="A quick hello, on camera"
          description="A short walkthrough of who I am and the work I do."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl [perspective:1400px]"
        >
          {/* Ambient glow behind the frame */}
          <div className="pointer-events-none absolute -inset-8 -z-10 animate-aurora rounded-[3rem] bg-gradient-to-tr from-signal-blue/30 via-signal-cyan/20 to-signal-violet/30 blur-3xl" />

          {/* Animated corner brackets */}
          <div className="pointer-events-none absolute -inset-3 sm:-inset-4">
            {CORNERS.map((pos, i) => (
              <motion.span
                key={pos}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className={`absolute h-7 w-7 border-signal-cyan/70 sm:h-10 sm:w-10 ${pos}`}
              />
            ))}
          </div>

          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="theme-dark relative overflow-hidden rounded-2xl p-[1.5px] shadow-glow"
          >
            {/* Rotating gradient border */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,rgb(var(--signal-cyan))_60deg,rgb(var(--signal-blue))_120deg,transparent_180deg,rgb(var(--signal-violet))_260deg,transparent_330deg)]" />

            <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-ink-950">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-white/[0.07] bg-ink-900/90 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[11px] text-mist-500">~/intro.mp4</span>
                <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-mist-400">
                  <span className="relative flex h-2 w-2">
                    {playing && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-mint opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${
                        playing ? 'bg-signal-mint' : 'bg-mist-500'
                      }`}
                    />
                  </span>
                  {playing ? 'playing' : 'ready'}
                </span>
              </div>

              {/* Video */}
              <div
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label="Intro video player. Space to play or pause, arrow keys to seek."
                className="group relative aspect-video outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan"
              >
                <video
                  ref={videoRef}
                  src={VIDEO_SRC}
                  preload="metadata"
                  playsInline
                  onClick={togglePlay}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onEnded={() => setPlaying(false)}
                  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                  onTimeUpdate={(e) => {
                    if (!dragging) setCurrentTime(e.currentTarget.currentTime)
                  }}
                  onProgress={(e) => {
                    const v = e.currentTarget
                    if (v.duration && v.buffered.length) {
                      setBuffered(v.buffered.end(v.buffered.length - 1) / v.duration)
                    }
                  }}
                  className="h-full w-full cursor-pointer bg-black object-cover"
                />

                {/* Scanline sheen sweeping across before playback */}
                {!started && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                      className="h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  </div>
                )}

                {/* Big play button */}
                <motion.button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? 'Pause video' : 'Play video'}
                  initial={false}
                  animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.8 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-signal-gradient bg-[length:200%_auto] text-ink-900 shadow-glow transition-[background-position] duration-500 hover:bg-right sm:h-24 sm:w-24 ${
                    playing ? 'pointer-events-none' : ''
                  }`}
                >
                  {!playing && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-signal-cyan/40" />
                  )}
                  <Play className="relative ml-1 h-8 w-8 fill-current sm:h-10 sm:w-10" />
                </motion.button>

                {/* Skip feedback */}
                {skipFlash && (
                  <motion.div
                    key={skipFlash.key}
                    initial={{ opacity: 0.9, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`pointer-events-none absolute top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white ${
                      skipFlash.dir === 'fwd' ? 'right-[15%]' : 'left-[15%]'
                    }`}
                  >
                    {skipFlash.dir === 'fwd' ? <RotateCw className="h-7 w-7" /> : <RotateCcw className="h-7 w-7" />}
                  </motion.div>
                )}

                {/* Control bar */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-12 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:px-4 sm:pb-3 ${
                    showControls ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Seek bar: click or drag to scrub */}
                  <div
                    ref={barRef}
                    role="slider"
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={Math.round(duration)}
                    aria-valuenow={Math.round(currentTime)}
                    aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
                    onPointerDown={handleBarDown}
                    onPointerMove={handleBarMove}
                    onPointerUp={handleBarUp}
                    onPointerCancel={handleBarUp}
                    onPointerLeave={() => setHoverRatio(null)}
                    className="group/bar relative mb-2 flex h-4 cursor-pointer touch-none items-center"
                  >
                    <div className="relative h-1 w-full rounded-full bg-white/20 transition-[height] duration-200 group-hover/bar:h-1.5">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-white/30" style={{ width: `${buffered * 100}%` }} />
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-signal-blue to-signal-cyan"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                    <span
                      className={`absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgb(var(--signal-cyan))] transition-transform duration-150 ${
                        dragging ? 'scale-125' : 'scale-0 group-hover/bar:scale-100'
                      }`}
                      style={{ left: `${progress * 100}%` }}
                    />
                    {hoverRatio !== null && duration > 0 && (
                      <span
                        className="pointer-events-none absolute bottom-full mb-2 -translate-x-1/2 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white"
                        style={{ left: `${hoverRatio * 100}%` }}
                      >
                        {formatTime(hoverRatio * duration)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-white sm:gap-2">
                    <button type="button" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} className="rounded-md p-1.5 hover:bg-white/15">
                      {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                    </button>
                    <button type="button" onClick={() => skip(-SKIP_SECONDS)} aria-label={`Back ${SKIP_SECONDS} seconds`} className="relative rounded-md p-1.5 hover:bg-white/15">
                      <RotateCcw className="h-4 w-4" />
                      <span className="absolute inset-0 flex items-center justify-center pt-px text-[7px] font-bold">{SKIP_SECONDS}</span>
                    </button>
                    <button type="button" onClick={() => skip(SKIP_SECONDS)} aria-label={`Forward ${SKIP_SECONDS} seconds`} className="relative rounded-md p-1.5 hover:bg-white/15">
                      <RotateCw className="h-4 w-4" />
                      <span className="absolute inset-0 flex items-center justify-center pt-px text-[7px] font-bold">{SKIP_SECONDS}</span>
                    </button>
                    <button type="button" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} className="rounded-md p-1.5 hover:bg-white/15">
                      {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                    <span className="ml-1 font-mono text-[11px] tabular-nums text-white/80">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <button type="button" onClick={goFullscreen} aria-label="Fullscreen" className="ml-auto rounded-md p-1.5 hover:bg-white/15">
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
