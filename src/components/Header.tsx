'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/biografia', label: 'Biografia' },
  { href: '/musica', label: 'Obras' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/acervo', label: 'Acervo' },
  { href: '/instituto', label: 'Instituto' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-6
          h-[var(--header-h)] border-b border-line transition-all duration-300
          ${scrolled ? 'bg-bg/90 backdrop-blur-md shadow-lg' : 'bg-bg/52 backdrop-blur-sm'}`}
      >
        <Link href="/" className="font-body font-black tracking-wide text-[.96rem] text-fg shrink-0">
          Edney Fernandes
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-[1rem] font-semibold tracking-wide transition-colors duration-200
                hover:text-white group
                ${pathname === href ? 'text-white' : 'text-white/80'}`}
            >
              {label}
              <span className={`absolute left-0 -bottom-0.5 h-px bg-gold transition-all duration-300
                ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-full border border-line bg-transparent
            flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300
            ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300
            ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: .22 }}
            className="fixed top-[calc(var(--header-h)+8px)] left-4 right-4 z-40
              bg-[rgba(17,17,17,.97)] backdrop-blur-lg border border-line rounded-2xl
              p-5 flex flex-col gap-5 shadow-2xl"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[1.05rem] font-semibold transition-colors
                  ${pathname === href ? 'text-gold' : 'text-white/90 hover:text-white'}`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
