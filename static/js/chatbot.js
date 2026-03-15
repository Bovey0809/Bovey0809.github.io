(function () {
  "use strict";

  /* ── FAQ knowledge base ── */
  var faqs = [
    {
      keywords: ["about", "who", "bowei", "hou", "you"],
      q: "Who is Bowei Hou?",
      a: "Bowei Hou is a <b>Machine Learning Engineer</b> at <a href='https://ultralytics.com' target='_blank'>Ultralytics</a>, working on <a href='https://github.com/ultralytics/ultralytics' target='_blank'>YOLO</a> — the state-of-the-art real-time object detection model. His interests span machine learning, computer vision, and model optimization."
    },
    {
      keywords: ["yolo", "object detection", "ultralytics", "work", "job", "do"],
      q: "What does Bowei work on?",
      a: "Bowei works at <b>Ultralytics</b> on the <b>YOLO</b> family of models — real-time object detection systems. He contributes to the core framework, model training, and optimization."
    },
    {
      keywords: ["yolo3d", "3d", "stereo", "kitti", "depth", "research"],
      q: "What is the YOLO3D project?",
      a: "<b>YOLO3D</b> is a stereo 3D object detection model for the KITTI benchmark. Key features include a Siamese weight-shared backbone, stereo cost volume with 24 disparity offsets, and DFL-style depth bins. The l-size model achieves <b>50.9% AP3D@0.5</b> on KITTI Moderate at <b>72 FPS</b>. <a href='/publications/'>Read more</a>."
    },
    {
      keywords: ["publication", "paper", "research", "publications"],
      q: "Where can I see publications?",
      a: "Check the <a href='/publications/'>Publications</a> page for research papers and detailed experiment reports, including the YOLO3D stereo 3D detection work."
    },
    {
      keywords: ["blog", "post", "posts", "write", "article"],
      q: "What does the blog cover?",
      a: "The <a href='/posts/'>Blog</a> covers topics like neural networks, backpropagation, data science workflows, productivity, and dev tools. Posts range from ML fundamentals to practical engineering tips."
    },
    {
      keywords: ["contact", "email", "reach", "hire", "connect"],
      q: "How can I contact Bowei?",
      a: "You can reach Bowei via email at <a href='mailto:my364007886@gmail.com'>my364007886@gmail.com</a> or on GitHub at <a href='https://github.com/Bovey0809' target='_blank'>Bovey0809</a>."
    },
    {
      keywords: ["github", "code", "repo", "open source", "project"],
      q: "Where is the code?",
      a: "Check out Bowei's projects on <a href='https://github.com/Bovey0809' target='_blank'>GitHub</a>. Key contributions include the Ultralytics YOLO framework and YOLO3D stereo detection."
    },
    {
      keywords: ["interest", "skill", "machine learning", "computer vision", "ml", "cv", "optimization"],
      q: "What are the main interests?",
      a: "Bowei's core interests are <b>machine learning</b>, <b>computer vision</b>, and <b>model optimization</b> — with a focus on building real-time, production-ready detection systems."
    },
    {
      keywords: ["site", "website", "blog", "codemylife", "name"],
      q: "What is this site?",
      a: "This is <b>Codemylife</b> — Bowei Hou's personal blog where he shares notes on ML, CV, and software engineering topics he learns along the way."
    }
  ];

  /* ── Styles ── */
  var css = [
    ":root{--cb-primary:#2d6a4f;--cb-accent:#52b788;--cb-bg:#fff;--cb-msg-bg:#f0f4f0;}",
    ".dark :root,body.dark{--cb-primary:#52b788;--cb-accent:#95d5b2;--cb-bg:#1d1e20;--cb-msg-bg:#2b2d30;}",
    "#cb-btn{",
    "  position:fixed;bottom:24px;right:24px;z-index:10000;",
    "  width:54px;height:54px;border-radius:50%;border:none;",
    "  background:var(--cb-primary,#2d6a4f);color:#fff;font-size:24px;cursor:pointer;",
    "  box-shadow:0 4px 14px rgba(0,0,0,.22);transition:transform .2s,background .2s;",
    "  display:flex;align-items:center;justify-content:center;",
    "}",
    "#cb-btn:hover{transform:scale(1.08);}",
    "#cb-box{",
    "  position:fixed;bottom:90px;right:24px;z-index:10000;",
    "  width:360px;max-height:500px;border-radius:14px;overflow:hidden;",
    "  box-shadow:0 8px 32px rgba(0,0,0,.18);display:none;flex-direction:column;",
    "  font-family:inherit;font-size:14px;background:var(--cb-bg,#fff);",
    "  border:1px solid rgba(0,0,0,.08);",
    "}",
    "#cb-box.open{display:flex;}",
    "#cb-hdr{",
    "  background:var(--cb-primary,#2d6a4f);color:#fff;padding:13px 16px;",
    "  font-weight:600;font-size:15px;display:flex;align-items:center;justify-content:space-between;",
    "}",
    "#cb-hdr button{background:none;border:none;color:#fff;font-size:20px;cursor:pointer;line-height:1;opacity:.8;}",
    "#cb-hdr button:hover{opacity:1;}",
    "#cb-msgs{",
    "  flex:1;overflow-y:auto;padding:14px 14px 8px;background:var(--cb-msg-bg,#f0f4f0);",
    "  display:flex;flex-direction:column;gap:10px;min-height:180px;max-height:320px;",
    "}",
    ".cb-m{max-width:85%;padding:10px 14px;border-radius:14px;line-height:1.45;word-wrap:break-word;}",
    ".cb-m.bot{background:var(--cb-bg,#fff);color:inherit;align-self:flex-start;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.06);}",
    ".cb-m.user{background:var(--cb-primary,#2d6a4f);color:#fff;align-self:flex-end;border-bottom-right-radius:4px;}",
    ".cb-m a{text-decoration:underline;}",
    ".cb-m.bot a{color:var(--cb-primary,#2d6a4f);}",
    ".cb-m.user a{color:var(--cb-accent,#95d5b2);}",
    "#cb-chips{padding:6px 14px 4px;display:flex;flex-wrap:wrap;gap:6px;background:var(--cb-msg-bg,#f0f4f0);}",
    ".cb-chip{",
    "  background:var(--cb-bg,#fff);border:1px solid var(--cb-primary,#2d6a4f);color:var(--cb-primary,#2d6a4f);",
    "  border-radius:16px;padding:5px 12px;font-size:12px;cursor:pointer;transition:all .15s;white-space:nowrap;",
    "}",
    ".cb-chip:hover{background:var(--cb-primary,#2d6a4f);color:#fff;}",
    "#cb-irow{display:flex;border-top:1px solid rgba(0,0,0,.08);background:var(--cb-bg,#fff);}",
    "#cb-in{flex:1;border:none;outline:none;padding:12px 14px;font-size:14px;font-family:inherit;background:transparent;color:inherit;}",
    "#cb-send{background:var(--cb-primary,#2d6a4f);color:#fff;border:none;padding:0 16px;font-size:16px;cursor:pointer;transition:opacity .15s;}",
    "#cb-send:hover{opacity:.85;}",
    "@media(max-width:480px){",
    "  #cb-box{width:calc(100vw - 24px);right:12px;bottom:84px;max-height:70vh;}",
    "  #cb-btn{width:48px;height:48px;font-size:20px;bottom:16px;right:14px;}",
    "}"
  ].join("\n");

  /* ── Inject CSS ── */
  var s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);

  /* ── Build DOM ── */
  var btn = document.createElement("button");
  btn.id = "cb-btn";
  btn.setAttribute("aria-label", "Open chat");
  btn.innerHTML = "&#128172;";
  document.body.appendChild(btn);

  var box = document.createElement("div");
  box.id = "cb-box";
  box.innerHTML = [
    '<div id="cb-hdr"><span>Ask me anything</span><button id="cb-close" aria-label="Close">&times;</button></div>',
    '<div id="cb-msgs"></div>',
    '<div id="cb-chips"></div>',
    '<div id="cb-irow"><input id="cb-in" type="text" placeholder="Type a question..." autocomplete="off"/><button id="cb-send" aria-label="Send">&#10148;</button></div>'
  ].join("");
  document.body.appendChild(box);

  var msgs = document.getElementById("cb-msgs");
  var chips = document.getElementById("cb-chips");
  var inp = document.getElementById("cb-in");

  function addMsg(html, role) {
    var d = document.createElement("div");
    d.className = "cb-m " + role;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showChips(list) {
    chips.innerHTML = "";
    list.forEach(function (f) {
      var c = document.createElement("button");
      c.className = "cb-chip";
      c.textContent = f.q;
      c.addEventListener("click", function () { handle(f.q); });
      chips.appendChild(c);
    });
  }

  function findAnswer(text) {
    var lw = text.toLowerCase();
    var scored = faqs.map(function (f) {
      var sc = 0;
      f.keywords.forEach(function (k) { if (lw.indexOf(k) !== -1) sc++; });
      return { f: f, sc: sc };
    });
    scored.sort(function (a, b) { return b.sc - a.sc; });
    return scored[0].sc > 0 ? scored[0].f.a : null;
  }

  function randomChips() {
    var sh = faqs.slice().sort(function () { return 0.5 - Math.random(); });
    return sh.slice(0, 4);
  }

  function handle(text) {
    addMsg(text, "user");
    chips.innerHTML = "";
    var ans = findAnswer(text);
    if (ans) {
      addMsg(ans, "bot");
    } else {
      addMsg("I'm not sure about that. Here are some topics I can help with:", "bot");
    }
    showChips(randomChips());
  }

  /* ── Events ── */
  btn.addEventListener("click", function () {
    box.classList.toggle("open");
    if (box.classList.contains("open")) inp.focus();
  });
  document.getElementById("cb-close").addEventListener("click", function () {
    box.classList.remove("open");
  });
  document.getElementById("cb-send").addEventListener("click", function () {
    var t = inp.value.trim();
    if (t) { handle(t); inp.value = ""; }
  });
  inp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var t = inp.value.trim();
      if (t) { handle(t); inp.value = ""; }
    }
  });

  /* ── Greeting ── */
  addMsg("Hi! I'm a quick FAQ bot for this site. Ask me about Bowei's work, research, blog, or how to get in touch.", "bot");
  showChips(randomChips());
})();
