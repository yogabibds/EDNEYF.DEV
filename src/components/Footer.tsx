import Link from 'next/link'

const links = [
  { href: '/biografia', label: 'Biografia' },
  { href: '/musica', label: 'Obras' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/acervo', label: 'Acervo' },
  { href: '/instituto', label: 'Instituto' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center border-t border-line bg-bg">
      <p className="font-display text-[1.5rem] text-fg/80 italic mb-8">A música continua.</p>
      <nav className="flex flex-wrap justify-center gap-6 mb-10">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="text-muted text-sm hover:text-gold transition-colors">
            {label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-line pt-8 space-y-1">
        <p className="text-muted text-sm">Edney Fernandes · Todos os direitos reservados</p>
        <p className="text-muted/60 text-xs">Curadoria e desenvolvimento por Laiá Music (ABRAMUS 4014)</p>
      </div>
    </footer>
  )
}
