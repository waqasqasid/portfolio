import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/923042620412'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M16.004 3C9.375 3 3.996 8.373 3.996 15c0 2.116.553 4.183 1.604 6.004L3.9 27.2l6.36-1.668A11.96 11.96 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.8c-1.79 0-3.546-.48-5.08-1.39l-.364-.216-3.774.99 1.007-3.68-.237-.378A9.75 9.75 0 0 1 6.2 15c0-5.405 4.4-9.8 9.804-9.8 5.402 0 9.796 4.395 9.796 9.8 0 5.405-4.394 9.8-9.796 9.8Zm5.373-7.337c-.294-.147-1.742-.86-2.012-.958-.27-.098-.466-.147-.662.147-.196.294-.76.958-.932 1.154-.172.196-.343.22-.637.073-.294-.147-1.242-.458-2.366-1.46-.874-.78-1.465-1.743-1.637-2.037-.171-.294-.018-.453.13-.6.132-.131.294-.343.441-.514.147-.172.196-.294.294-.49.098-.196.049-.368-.025-.515-.073-.147-.661-1.594-.906-2.183-.239-.573-.481-.495-.662-.504l-.564-.01a1.08 1.08 0 0 0-.784.368c-.27.294-1.029 1.006-1.029 2.452 0 1.447 1.054 2.845 1.2 3.041.148.196 2.074 3.167 5.025 4.44.702.303 1.25.484 1.677.62.705.224 1.346.192 1.853.117.565-.085 1.742-.712 1.988-1.4.245-.687.245-1.276.171-1.4-.073-.122-.27-.196-.563-.343Z" />
      </svg>
    </motion.a>
  )
}
