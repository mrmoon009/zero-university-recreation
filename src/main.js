import './style.css';

const A='/assets/';
const media = {
  hero: A+'6a562d7f1aa00693388142.mp4',
  scene1: A+'6a56301adc833709765611.mp4',
  scene2: A+'6a563bc8bc43c715790957.mp4',
  scene3: A+'6a563d388a7e2876739487.mp4',
  scene4: A+'6a56431fc7080904348978.mp4',
  scene5: A+'6a5646c8cc186650480078.mp4',
  scene6: A+'6a564ac6d58ec462645154.mp4',
  still1: A+'6a562eef65094255109853.jpg',
  still2: A+'6a564f54e84ba689869157.jpg'
};

const roles = [
  ['AI-NATIVE ENGINEERING',['Applied AI Engineer','Backend Engineer','Full-Stack Developer','Frontend Developer']],
  ['AI + DATA',['AI Engineer','Machine Learning Engineer','Data Scientist','BI Analyst']],
  ['PRODUCT',['Product Manager','Product Analyst','Product Marketer','Product Engineer']],
  ['DESIGN',['Product Designer','UX Designer','Design Engineer','Systems Designer']],
  ['MARKETING',['Growth Marketer','Content Strategist','Brand Marketer','Performance Marketer']],
  ['SECURITY',['AI Security Analyst','Security Engineer','Cybersecurity Analyst','SOC Analyst']]
];

const scenarios = [
  ['SOFTWARE ENGINEER','Build an AI-assisted email rewrite experience that helps people finish difficult drafts.',media.scene1],
  ['PRODUCT','Turn messy customer feedback into a sharp product decision and a launch-ready brief.',media.scene2],
  ['DESIGN','Prototype a useful interface, test the interaction, then present the reasoning behind the design.',media.scene3],
  ['MARKETING','Develop a campaign concept, iterate the creative and defend the growth strategy.',media.scene4],
  ['DATA','Investigate a real business question, find the signal and communicate the decision clearly.',media.scene5],
  ['SECURITY','Assess an evolving product risk and produce a practical response plan for a real team.',media.scene6]
];

const skills = [
  ['01','COMMUNICATION','Write, speak and present clearly — including to AI systems.'],
  ['02','PEOPLE','Collaborate, negotiate, navigate conflict and lead.'],
  ['03','DECISION MAKING','Make good calls with data, uncertainty and competing stakeholders.'],
  ['04','EXECUTION','Turn ambiguous problems into things that actually ship.'],
  ['05','DOMAIN SKILL','Master the technical craft required by the role you want.'],
  ['06','TOOL FLUENCY','Use modern software and AI tools as leverage, not as a substitute for judgment.']
];

function video(src, extra=''){
  return `<video class="media-video ${extra}" autoplay muted loop playsinline preload="metadata" src="${src}"></video>`;
}

document.querySelector('#app').innerHTML = `
<header class="nav">
  <a class="brand" href="#top" aria-label="Zero home">ZERO<span class="dot">.</span></a>
  <nav class="navlinks">
    <a href="#roles">Careers</a>
    <a href="#scenarios">Scenarios</a>
    <a href="#skills">Skills</a>
    <a href="#principles">Why</a>
  </nav>
  <a class="nav-cta" href="#join">Join beta <span>↗</span></a>
  <button class="menu" aria-label="Open menu"><i></i><i></i></button>
</header>

<main id="top">
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">THE CAREER OS FOR AN AI-NATIVE WORLD</p>
      <h1><span>Learn.</span><span>Build.</span><span>Get hired.</span></h1>
      <p class="hero-lede">Skip the credential treadmill. Build real capability through realistic work, prove what you can do, and leave with evidence employers can actually use.</p>
      <div class="hero-actions">
        <a class="button button-dark" href="#join">Join the beta <span>↗</span></a>
        <a class="text-link" href="#scenarios">See how it works ↓</a>
      </div>
    </div>
    <div class="hero-visual">
      ${video(media.hero,'hero-video')}
      <div class="hero-stamp"><span>REAL WORK</span><span>REAL PROOF</span><span>REAL OPPORTUNITY</span></div>
    </div>
  </section>

  <section class="statement section-pad">
    <p class="giant">A different way to prepare<br><em>for the world of work.</em></p>
    <div class="statement-grid">
      <p>Traditional education starts with subjects, schedules and credentials. This experience starts with the person — and the capabilities they need next.</p>
      <p>AI changes the tools, not the need for judgment. So the platform puts you inside realistic work and measures how you think, communicate and execute.</p>
    </div>
  </section>

  <section id="roles" class="roles section-pad">
    <div class="section-head">
      <p class="eyebrow">01 / THE DESTINATION</p>
      <h2>Build toward the<br><em>roles people want.</em></h2>
      <p>Choose a direction. Then practice the work, tools and decisions that make someone effective in it.</p>
    </div>
    <div class="role-grid">
      ${roles.map((r,i)=>`
        <article class="role-card">
          <span class="role-no">0${i+1}</span>
          <h3>${r[0]}</h3>
          <ul>${r[1].map(x=>`<li>${x}</li>`).join('')}</ul>
        </article>`).join('')}
    </div>
  </section>

  <section id="scenarios" class="scenarios">
    <div class="scenario-intro section-pad">
      <p class="eyebrow">02 / THE METHOD</p>
      <h2>Learn by doing<br><em>the work itself.</em></h2>
      <p>Forget passive lessons. Every scenario gives you a problem, constraints, collaborators and a deliverable — the same ingredients that make real work hard.</p>
    </div>
    <div class="scenario-list">
      ${scenarios.map((s,i)=>`
        <article class="scenario">
          <div class="scenario-meta"><span>SCENARIO 0${i+1}</span><span>${s[0]}</span></div>
          <div class="scenario-body">
            <div><h3>${s[1]}</h3><a href="#join">Explore scenario ↗</a></div>
            <div class="scenario-media">${video(s[2])}</div>
          </div>
        </article>`).join('')}
    </div>
  </section>

  <section class="proof section-pad">
    <div class="proof-image">${video(media.scene1)}<span class="image-label">WORK / 01</span></div>
    <div class="proof-copy">
      <p class="eyebrow">03 / PROOF</p>
      <h2>Don't tell employers.<br><em>Show them.</em></h2>
      <p>Your projects become a portfolio of evidence. Your process becomes visible. Feedback becomes a record of how you work — not just what you claim to know.</p>
      <div class="metrics">
        <div><b>WORK</b><span>Real deliverables</span></div>
        <div><b>PROCESS</b><span>Visible reasoning</span></div>
        <div><b>FEEDBACK</b><span>Performance signals</span></div>
      </div>
    </div>
  </section>

  <section class="split-feature">
    <div class="feature-copy section-pad">
      <p class="eyebrow">04 / THE HUMAN LAYER</p>
      <h2>AI can help you<br><em>move faster.</em></h2>
      <p>It cannot replace understanding. The system is designed so you can use powerful AI tools while still having to make the calls, inspect the output and explain the work.</p>
      <a class="text-link" href="#skills">Explore the skill model ↗</a>
    </div>
    <div class="feature-image">${video(media.scene5)}</div>
  </section>

  <section id="skills" class="skills section-pad">
    <div class="section-head">
      <p class="eyebrow">05 / WHAT GETS MEASURED</p>
      <h2>Six skills that<br><em>compound together.</em></h2>
    </div>
    <div class="skill-grid">
      ${skills.map(s=>`<article class="skill"><span>${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('')}
    </div>
  </section>

  <section id="principles" class="principles">
    <div class="principle-visual">${video(media.scene3)}</div>
    <div class="principle-copy section-pad">
      <p class="eyebrow">06 / THE PRINCIPLE</p>
      <h2>Capability is more useful<br>than a <em>proxy.</em></h2>
      <p>Time spent in a classroom can be valuable, but time alone is not proof of capability. The stronger signal is what someone can produce, how they reason and what it is like to work with them.</p>
      <div class="quote">“The work is the credential.”</div>
    </div>
  </section>

  <section class="hiring section-pad">
    <div class="section-head">
      <p class="eyebrow">07 / THE MARKETPLACE</p>
      <h2>More matching.<br><em>Less searching.</em></h2>
      <p>Build a profile around demonstrated work and capabilities. Employers can discover candidates from signals that are closer to the job itself.</p>
    </div>
    <div class="hiring-cards">
      <div class="hire-card"><span>01</span><h3>BUILD</h3><p>Complete projects that look and feel like the work you want.</p></div>
      <div class="hire-card"><span>02</span><h3>PROVE</h3><p>Collect evidence across quality, speed, independence and communication.</p></div>
      <div class="hire-card"><span>03</span><h3>MATCH</h3><p>Surface opportunities where your demonstrated capability fits.</p></div>
    </div>
  </section>

  <section class="economics">
    <div class="economics-inner">
      <p class="eyebrow">08 / A DIFFERENT BUSINESS MODEL</p>
      <h2>When you get hired,<br><em>everyone wins.</em></h2>
      <div class="economics-row">
        <span>LEARNER</span><strong>FREE / LOW FRICTION</strong><span>EMPLOYER</span><strong>PAYS FOR THE MATCH</strong>
      </div>
      <p class="economics-note">The product is aligned around one outcome: helping capable people find work where they can thrive.</p>
    </div>
  </section>

  <section id="join" class="join">
    <div class="join-top">
      <p class="eyebrow">BETA / LIMITED ACCESS</p>
      <h2>Ready to build<br><em>what's next?</em></h2>
    </div>
    <form id="waitlist">
      <label for="email">Your email</label>
      <div class="input-row">
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
        <button type="submit">Join beta <span>↗</span></button>
      </div>
      <small id="form-note">No spam. Just an invite when access opens.</small>
    </form>
    <div class="join-bottom">
      <span>ZERO / CAREER INFRASTRUCTURE</span>
      <a href="mailto:team@example.com">team@example.com</a>
    </div>
  </section>
</main>

<footer>
  <span>© ${new Date().getFullYear()} ZERO — CLEAN-ROOM DEMO</span>
  <div><a href="#top">Back to top ↑</a><a href="#join">Join beta</a></div>
</footer>
`;

const menu=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
menu.addEventListener('click',()=>{navlinks.classList.toggle('open');menu.classList.toggle('active')});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('open')));

document.querySelector('#waitlist').addEventListener('submit',(e)=>{
  e.preventDefault();
  const email=document.querySelector('#email').value;
  document.querySelector('#form-note').textContent=`Thanks — ${email} is on the local demo waitlist. Connect this form to your backend/API for production.`;
  e.target.reset();
});

const io=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('in')});
},{threshold:.12});
document.querySelectorAll('section, .role-card, .scenario, .skill, .hire-card').forEach(el=>io.observe(el));

