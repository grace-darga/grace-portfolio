import { profile as p, projects, education, skills, training, experience, certifications } from "../data";

const nav = [["Accueil", "home"], ["Projets", "projects"], ["Formation", "formation"], ["Certifications", "certifications"], ["Expérience", "experience"], ["Contact", "contact"]];
const Tags = ({ list }) => <ul className="tags">{list.map((t) => <li key={t}>{t}</li>)}</ul>;

export default function Home() {
  return (
    <>
      <header className="bar">
        <a href="#home" className="logo">{p.name.split(" ").map((w) => w[0]).join("")}.dev</a>
        <nav>{nav.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div>
            <p className="muted">{p.title}</p>
            <h1>{p.name}</h1>
            <h2>{p.tagline}</h2>
            <p className="bio">{p.bio}</p>
            <div className="row">
              <a className="btn primary" href="#projects">Voir mes projets</a>
              <a className="btn" href="#contact">Me contacter</a>
            </div>
            <div className="row links">{p.links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
          </div>
          <div className="term" aria-label="Terminal">
            <div className="term-top"><i /><i /><i /><span>{p.handle}:~</span></div>
            <pre>
{`$ whoami
${p.whoami.join("\n")}

$ status
disponibilité   `}<b className="ok">{p.status}</b>{`
focus           ${p.focus}
$ `}<span className="cursor" />
            </pre>
          </div>
        </section>

        <section id="projects" className="wrap">
          <h3>Projets</h3>
          <div className="grid">
            {projects.map((x) => (
              <article key={x.title} className="card">
                <span className="pill">{x.status}</span>
                <h4>{x.url ? <a href={x.url} target="_blank" rel="noreferrer">{x.title}</a> : x.title}</h4>
                <p>{x.desc}</p>
                <Tags list={x.tags} />
              </article>
            ))}
          </div>
        </section>

        <section id="formation" className="wrap">
          <h3>Formation</h3>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree}><time>{e.year}</time><h4>{e.degree}</h4><p>{e.school}</p>{e.note && <p className="muted">{e.note}</p>}</li>
            ))}
          </ol>
          <div className="grid" style={{ marginTop: 28 }}>
            <article className="card"><h4>Spécialisations</h4><ul className="goals">{skills.map((x) => <li key={x}>{x}</li>)}</ul></article>
            <article className="card"><h4>Formations complémentaires</h4><ul className="goals">{training.map((x) => <li key={x.name}>{x.name} — {x.status}</li>)}</ul></article>
          </div>
        </section>

        <section id="certifications" className="wrap">
          <h3>Certifications</h3>
          <div className="grid">
            {certifications.map((c) => (
              <article key={c.issuer} className="card">
                <span className="pill">{c.status}</span>
                <h4>{c.issuer}</h4>
                <ul className="goals">{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap">
          <h3>Expérience</h3>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.period}>
                <time>{e.period}</time><h4>{e.role}</h4><p className="muted">{e.org}</p>
                <ul className="goals">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <Tags list={e.tags} />
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="wrap contact">
          <h3>Travaillons ensemble</h3>
          <p>À la recherche d’un stage en tant que consultante GRC. N’hésitez pas à me contacter.</p>
          <div className="row">
            <a className="btn primary" href={`mailto:${p.email}`}>{p.email}</a>
            <a className="btn" href={p.links[0].url} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="wrap muted">© {new Date().getFullYear()} {p.name} — Rabat, Maroc</footer>
    </>
  );
}
