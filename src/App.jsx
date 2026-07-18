import { profile, status, projects, skills } from "./data.js";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <span className="nav-name">{profile.name}</span>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero container">
      <div className="role">
        <span className="dot" aria-hidden="true" />
        {profile.role}
      </div>
      <h1>Building machine learning that ships.</h1>
      <p className="tagline">{profile.tagline}</p>
      <p className="edu">{profile.education}</p>

      {status.visible && (
        <div className="status" aria-label="Live progress">
          <div>
            <div className="k">Study day</div>
            <div className="v">{status.day}</div>
          </div>
          <div>
            <div className="k">Projects shipped</div>
            <div className="v">{status.shipped}</div>
          </div>
          <div>
            <div className="k">GitHub streak</div>
            <div className="v">{status.streak} days</div>
          </div>
        </div>
      )}
    </header>
  );
}

function ProjectRow({ p }) {
  return (
    <a className="row" href={p.link} target="_blank" rel="noreferrer">
      <div className="row-top">
        <span className={`sdot ${p.status}`} aria-hidden="true" />
        <span className="pname">{p.name}</span>
        <span className="pdate">{p.date}</span>
      </div>
      <p className="pdesc">{p.description}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </a>
  );
}

function Projects() {
  const shipped = projects.filter((p) => p.status === "shipped").length;
  return (
    <section id="projects" className="container">
      <div className="section-head">
        <h2>Projects</h2>
        <span className="count">
          {shipped} shipped · {projects.length - shipped} building
        </span>
      </div>
      <div className="log">
        {projects.length === 0 ? (
          <div className="empty">First project ships this week.</div>
        ) : (
          projects.map((p) => <ProjectRow p={p} key={p.name} />)
        )}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="container">
      <div className="section-head">
        <h2>Skills</h2>
      </div>
      <div className="skill-groups">
        <div className="skill-group">
          <div className="k">Solid</div>
          <ul>
            {skills.solid.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="skill-group">
          <div className="k">Building now</div>
          <ul>
            {skills.building.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="skill-note">
        Nothing is listed before it's real. Items move left when I'd be happy to
        be interviewed on them.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container contact">
      <div className="section-head">
        <h2>Contact</h2>
      </div>
      <p>
        Open to internships and junior ML engineering roles — healthcare,
        fintech, e-commerce, and beyond. The fastest way to evaluate me is my
        commit history: it updates every day.
      </p>
      <div className="buttons">
        <a className="btn primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        {profile.resumeUrl && (
          <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
        <a
          className="btn"
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn"
          href={`https://linkedin.com/in/${profile.linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
