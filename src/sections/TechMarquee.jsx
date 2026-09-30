const TECH = [
  'Linux', 'Docker', 'AWS EC2', 'ECS', 'ECR', 'S3', 'VPC', 'Auto Scaling', 'ELB',
  'GitHub Actions', 'CI/CD', 'Apache', 'Samba', 'VMware', 'VirtualBox', 'Bash',
]

export default function TechMarquee() {
  return (
    <div className="border-y border-signal-blue/10 bg-signal-blue/[0.04] py-5" aria-label="Technologies">
      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...TECH, ...TECH].map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= TECH.length}
              className="flex items-center gap-10 whitespace-nowrap font-mono text-sm font-medium text-signal-blue/80"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-signal-cyan" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
