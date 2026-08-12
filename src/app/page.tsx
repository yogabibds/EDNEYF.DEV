import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'
import MailtoForm from '@/components/MailtoForm'

export const metadata: Metadata = {
  title: 'Edney Fernandes: Compositor, Cantor e Intérprete Brasileiro | Obras que o tempo não apagou',
  description: 'Edney Fernandes, compositor, cantor e vocalista de Ed & A Tripulação. Obras gravadas por Péricles, Thiaguinho, Exaltasamba e Chrigor. Mais de 20 milhões de streams. Catálogo gerido pela Laiá Music.',
  keywords: [
    'Edney Fernandes', 'compositor pagode', 'Ed A Tripulação', 'A Hora É Essa',
    'No Fundo dos Meus Olhos', 'Péricles', 'Thiaguinho', 'Exaltasamba', 'Chrigor',
    'pagode paulista', 'samba-rock', 'soul brasileiro', 'Laiá Music',
    'Anos 90 Explosão do Pagode', 'Zona Leste São Paulo', 'Warner Chappell',
    'Sony Music Publishing', 'ABRAMUS', 'ECAD', 'Gamação', 'Imaginasamba',
    'Karametade', 'Projeto Despedida', 'obras inéditas pagode',
  ],
  alternates: { canonical: 'https://edneyfernandes.com' },
  openGraph: {
    title: 'Edney Fernandes: Obras que o tempo não apagou',
    description: 'Compositor, cantor e intérprete. Obras gravadas por Péricles, Thiaguinho e Exaltasamba. 20M+ streams.',
    url: 'https://edneyfernandes.com',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
    siteName: 'Edney Fernandes · Acervo Musical Oficial',
    locale: 'pt_BR', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edney Fernandes: Obras que o tempo não apagou',
    description: '20M+ streams. Obras em Warner Chappell e Sony Music Publishing.',
    images: ['/assets/img/memorial/edney-hero.jpg'],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Quem é Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Edney Fernandes foi compositor, cantor, violonista e percussionista brasileiro, vocalista do grupo Ed & A Tripulação. Suas obras acumulam mais de 20 milhões de streams e foram gravadas por Péricles, Thiaguinho, Exaltasamba e Chrigor." } },
    { "@type": "Question", "name": "Onde ouvir as músicas de Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "As composições estão disponíveis no Spotify, YouTube, Amazon Music e Apple Music. 'No Fundo dos Meus Olhos' (Péricles feat. Thiaguinho), 'Te Vejo na TV' e 'Deixa Rolar' (Exaltasamba) e 'É Só Saudade' (Chrigor) estão nas principais plataformas." } },
    { "@type": "Question", "name": "Como licenciar uma obra de Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "O catálogo é gerido pela Laiá Music. Para licenciamento, entre em contato pelo e-mail contact@edneyfernandes.com. As obras estão em Warner Chappell, Sony Music Publishing, Peermusic e Abril Music." } },
    { "@type": "Question", "name": "O que é o Projeto Despedida?",
      "acceptedAnswer": { "@type": "Answer", "text": "O Projeto Despedida reúne composições inéditas de Edney Fernandes, demos guardadas por mais de 20 anos, que nunca chegaram ao público. Um lançamento da Laiá Music." } },
  ]
}

const artists = [
  { id: 'hpzDEIy5P0M', title: 'No Fundo dos Meus Olhos', artist: 'Péricles feat. Thiaguinho' },
  { id: 'ED8T13zi81Y', title: 'Te Vejo na TV', artist: 'Exaltasamba' },
  { id: 'CsFETlUCPi8', title: 'Deixa Rolar', artist: 'Exaltasamba' },
  { id: 'YEAiDCOk3os', title: 'É Só Saudade', artist: 'Chrigor' },
  { id: 'vvw74QZd4MA', title: 'Por Toda a Vida', artist: 'Gamação' },
  { id: '1MmWj1gfjTo', title: 'História de Amor', artist: 'Os Mulekes' },
  { id: '3PZq8C8XAjY', title: 'Meu Desejo', artist: 'Grupo Percepção' },
]

const videos = [
  { id: 'ZMlJcangTng', title: 'Programa Guto Moreno', sub: 'Participação televisiva' },
  { id: 'hpzDEIy5P0M', title: 'No Fundo dos Meus Olhos', sub: 'Péricles feat. Thiaguinho' },
  { id: 'ED8T13zi81Y', title: 'Te Vejo na TV', sub: 'Exaltasamba' },
  { id: 'YEAiDCOk3os', title: 'É Só Saudade', sub: 'Chrigor' },
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-[var(--header-h)] overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img src="/assets/img/memorial/edney-hero.jpg" alt="Edney Fernandes"
              className="w-full h-full object-cover object-center grayscale-[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/30 to-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent" />
          </div>
          <div className="container relative z-10">
            <Reveal>
              <h1 className="font-display text-[clamp(3.4rem,7.2vw,6.8rem)] leading-[.9] tracking-[-0.04em] text-fg mb-3">
                Edney<br />Fernandes
              </h1>
              <p className="text-[.76rem] font-black uppercase tracking-[.2em] text-gold mb-4">
                Acervo Musical Oficial
              </p>
              <p className="text-[clamp(1.3rem,2.6vw,2rem)] leading-[1.22] text-fg max-w-[28ch] mb-3">
                Obras que o tempo não apagou.
              </p>
              <p className="text-[1rem] text-fg/75 max-w-[40ch] mb-8 leading-relaxed">
                Da Zona Leste de São Paulo para o Mundo.<br />
                Uma obra de 22 anos que atravessa gerações e continua sendo descoberta.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/catalogo" className="btn btn-primary">Explorar catálogo</Link>
                <Link href="/biografia" className="btn btn-secondary">Ler história</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BIO TEASER */}
        <section className="section">
          <div className="container">
            <Reveal className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow eyebrow-lg block mb-4">Biografia</span>
                <p className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-fg leading-[1.12] font-light italic mb-5">
                  "Edney Fernandes não pertencia a um gênero. O pagode o encontrou e o levou a uma geração."
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  Reservado, disciplinado, consciente do valor do que criava. Suas composições falam de amor, desejo e cotidiano com a naturalidade de quem não precisa explicar. A música explica sozinha.
                </p>
                <p className="text-[.76rem] font-bold uppercase tracking-[.14em] text-gold mb-6">
                  Cantor · Compositor · Vocalista · Violonista · Percussionista
                </p>
                <Link href="/biografia" className="btn btn-secondary inline-flex">Ver biografia completa →</Link>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
                <img src="/assets/img/memorial/edney - roda de samba.jpg" alt="Edney Fernandes em roda de samba"
                  className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* METRICS */}
        <section className="border-t-2 border-gold/40 py-16 bg-[#0c0c0c]">
          <div className="w-[min(100%-48px,1200px)] mx-auto">
            <span className="block text-center text-[.72rem] font-black uppercase tracking-[.2em] text-muted mb-8">
              Uma obra que não parou de circular
            </span>
            <div className="flex items-baseline gap-4 flex-wrap mb-2">
              <span className="text-[.65rem] font-black uppercase tracking-[.16em] text-gold shrink-0 max-w-[110px] leading-snug">Streams<br/>acumulados<br/>Spotify · YouTube<br/>Amazon Music</span>
              <Counter value={20800000} className="font-body font-black text-[clamp(4.5rem,15vw,11rem)] leading-[.88] tracking-[-0.05em] text-white flex-1" />
            </div>
            <p className="text-[.7rem] text-white/30 uppercase tracking-wide mb-8">Spotify · YouTube · Amazon Music</p>
            <div className="flex flex-wrap gap-10 border-t border-white/[.07] pt-8">
              {[
                { label: 'Playlists ativas', value: 205, sub: 'Spotify · Apple · Deezer', dec: false },
                { label: 'Alcance das playlists', value: 9.52, sub: 'milhões de ouvintes', dec: true },
                { label: 'Países', value: 20, prefix: '+', sub: 'onde as obras tocam', dec: false },
                { label: 'Obras registradas', value: 43, sub: 'ABRAMUS · ECAD', dec: false },
              ].map((m, i) => (
                <div key={m.label} className="flex-1 min-w-[140px]">
                  <span className="block text-[.65rem] font-black uppercase tracking-[.16em] text-gold mb-2">{m.label}</span>
                  <Counter value={m.value} prefix={m.prefix} decimals={m.dec ? 2 : 0}
                    className="font-body font-black text-[clamp(2.4rem,6vw,4.5rem)] leading-[.88] tracking-[-0.04em] text-white block" />
                  <span className="block text-[.62rem] text-white/30 uppercase tracking-wide mt-2">{m.sub}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-0 mt-8 pt-6 border-t border-white/[.06] items-center">
              <span className="text-[.6rem] font-black uppercase tracking-[.2em] text-white/20 pr-5 border-r border-white/[.07] mr-1">Obras em</span>
              {['Warner Chappell', 'Sony Music Publishing', 'Peermusic', 'Abril Music', 'ABRAMUS'].map(e => (
                <span key={e} className="font-display text-[clamp(1rem,2vw,1.3rem)] font-semibold text-white/75 px-5 border-r border-white/[.07] last:border-0">{e}</span>
              ))}
            </div>
          </div>
        </section>

        {/* INTERSTITIAL */}
        <div className="interstitial">
          <Reveal blur><p>Não foi esquecido.<br /><span className="text-gold">Foi guardado.</span></p></Reveal>
        </div>

        {/* ARTISTAS QUE GRAVARAM OBRAS */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-10">
              <span className="eyebrow eyebrow-lg">Composições em outras vozes</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-fg leading-tight mt-2">
                Artistas que gravaram<br /><span className="italic font-light">obras de Edney Fernandes</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px border border-line">
              {artists.map((a, i) => (
                <Reveal key={a.id} delay={i * 0.06}>
                  <a href={`https://www.youtube.com/watch?v=${a.id}`} target="_blank" rel="noopener"
                    className="flex items-center gap-3 p-4 bg-white/[.022] hover:bg-gold/[.06] transition-colors group">
                    <img src={`https://img.youtube.com/vi/${a.id}/default.jpg`} alt={a.title}
                      className="w-14 h-14 object-cover rounded shrink-0" loading="lazy" />
                    <div>
                      <strong className="block text-fg text-[.94rem] group-hover:text-gold transition-colors">{a.artist}</strong>
                      <span className="text-gold text-[.76rem]">{a.title}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal className="flex items-center gap-3 p-4 bg-white/[.012]">
                <div className="w-14 h-14 rounded bg-gold/[.08] flex items-center justify-center text-gold font-black text-lg shrink-0">+</div>
                <div>
                  <strong className="block text-muted text-[.88rem]">Imaginasamba · Karametade</strong>
                  <span className="text-white/30 text-[.74rem]">Kipaquera · Grupo Mi Menor e outros</span>
                </div>
              </Reveal>
            </div>
            <div className="text-center mt-8">
              <Link href="/catalogo" className="btn btn-secondary">Quero gravar uma obra</Link>
            </div>
          </div>
        </section>

        {/* VÍDEOS */}
        <section className="section bg-[#050505]">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Vídeos</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-fg leading-tight mt-2">
                Registros que<br /><span className="italic font-light">atravessaram o tempo</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-[2px]">
              <div>
                <iframe src="https://www.youtube.com/embed/6BlIPv5Lhow" title="Ed & A Tripulação: A Hora É Essa"
                  loading="lazy" allowFullScreen className="w-full aspect-video block border-0" />
                <div className="py-3">
                  <strong className="text-fg block">Ed & A Tripulação: A Hora É Essa</strong>
                  <span className="text-muted text-sm">Arquivo audiovisual · East West/Continental, 2000</span>
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                {videos.map(v => (
                  <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener"
                    className="flex gap-3 p-3 bg-white/[.04] hover:bg-gold/[.07] transition-colors items-center">
                    <div className="relative shrink-0 w-24">
                      <img src={`https://img.youtube.com/vi/${v.id}/default.jpg`} alt={v.title}
                        className="w-full aspect-video object-cover" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black/70 rounded-full w-7 h-7 flex items-center justify-center text-white text-[.7rem]">▶</span>
                      </div>
                    </div>
                    <div>
                      <strong className="text-fg text-[.86rem] block">{v.title}</strong>
                      <span className="text-muted text-[.74rem]">{v.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERSTITIAL 2 */}
        <div className="interstitial">
          <Reveal blur><p>Uma obra de 22 anos que atravessa gerações<br /><span className="text-gold">e continua sendo descoberta.</span></p></Reveal>
        </div>

        {/* PROJETO DESPEDIDA */}
        <section className="py-24 border-t border-gold/20 border-b border-gold/20 bg-gradient-to-br from-bg to-[#111]">
          <div className="container">
            <Reveal className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow eyebrow-lg block mb-4">Em breve</span>
                <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] text-fg leading-none mb-5 font-normal">
                  Projeto<br /><em>Despedida</em>
                </h2>
                <p className="font-display text-[1.4rem] italic text-gold mb-5 leading-snug">
                  Algumas obras esperam o momento certo.<br />Este é o momento.
                </p>
                <p className="text-muted leading-relaxed mb-7">
                  Composições inéditas de Edney Fernandes, demos guardadas por mais de 20 anos. Obras que nunca chegaram ao público. Agora chegam.
                </p>
                <MailtoForm
                  to="contact@edneyfernandes.com"
                  subject="Quero saber do lançamento do Projeto Despedida"
                  submitLabel="Avise-me no lançamento"
                  fields={[{ name: 'email', label: 'E-mail', type: 'email', placeholder: 'Seu e-mail', required: true }]}
                />
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-2xl border border-gold/20 bg-gold/[.04] w-full max-w-[280px] min-h-[280px] p-10">
                  <p className="font-display text-[1.4rem] italic text-gold text-center leading-relaxed">
                    Gesto de Carinho<br />
                    <span className="text-[.9rem] text-muted not-italic">Edney Fernandes</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CATALOG CTA */}
        <section className="section">
          <div className="container text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Catálogo</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-fg leading-tight mt-3 mb-4">Grave uma obra</h2>
              <p className="text-muted mb-8">Obras que esperaram o momento certo. Este é o momento.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/catalogo" className="btn btn-primary">Ver catálogo completo</Link>
                <Link href="/catalogo#licenciamento" className="btn btn-secondary">Quero gravar uma obra</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section bg-fg">
          <div className="container text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="block text-[.74rem] font-black uppercase tracking-[.18em] text-black/40 mb-4">Contato</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-bg leading-tight mb-4">Converse sobre o legado</h2>
              <p className="text-bg/60 mb-8">Para imprensa, parcerias, licenciamento e contato institucional.</p>
              <MailtoForm
                to="contact@edneyfernandes.com"
                subject="Contato: Edney Fernandes"
                submitLabel="Enviar mensagem"
                fields={[
                  { name: 'nome', label: 'Nome', placeholder: 'Seu nome', required: true },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seuemail@dominio.com', required: true },
                  { name: 'assunto', label: 'Assunto', type: 'select', options: ['Imprensa', 'Licenciamento', 'Regravação', 'Parceria', 'Outro'] },
                  { name: 'mensagem', label: 'Mensagem', type: 'textarea', placeholder: 'Como posso ajudar?' },
                ]}
              />
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
