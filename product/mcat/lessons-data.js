// Demo lesson content — hand-written for this prototype, not generated live and not copied
// from any textbook. Labeled "demo, unverified" in the UI: should be checked against a
// trusted source before any student relies on it (see specs/002-mcat-prep-tracker.md).

const LESSONS = [
  {
    id: "enzyme-kinetics",
    title: "Enzyme Kinetics: Michaelis-Menten Basics",
    section: "Bio/Biochem",
    visualSvg: `
      <svg viewBox="0 0 300 180" class="lesson-svg" role="img" aria-label="Reaction rate rising with substrate concentration, leveling off at Vmax">
        <line x1="40" y1="150" x2="280" y2="150" class="svg-axis" />
        <line x1="40" y1="150" x2="40" y2="20" class="svg-axis" />
        <text x="150" y="172" class="svg-label" text-anchor="middle">[Substrate]</text>
        <text x="16" y="85" class="svg-label" text-anchor="middle" transform="rotate(-90 16 85)">Rate</text>
        <line x1="40" y1="40" x2="280" y2="40" class="svg-guide" stroke-dasharray="4 4" />
        <text x="284" y="44" class="svg-label">Vmax</text>
        <path d="M 40 150 C 90 60, 140 40, 280 40" class="svg-curve" fill="none" />
        <line x1="95" y1="150" x2="95" y2="95" class="svg-guide" stroke-dasharray="4 4" />
        <circle cx="95" cy="95" r="4" class="svg-point" />
        <text x="95" y="166" class="svg-label" text-anchor="middle">Km</text>
      </svg>`,
    video: [
      { title: "Enzymes speed things up", narration: "Let's look at how enzymes speed up reactions." },
      { title: "Binding the substrate", narration: "An enzyme binds its substrate to form an enzyme-substrate complex." },
      { title: "Rate rises with substrate", narration: "As substrate concentration rises, reaction rate rises too, but only up to a point." },
      { title: "Vmax", narration: "That ceiling is called Vmax, the maximum rate once every enzyme molecule is saturated with substrate." },
      { title: "Km", narration: "Km is the substrate concentration at half of Vmax. A smaller Km means the enzyme binds substrate more tightly." },
    ],
    text: `Enzymes speed up reactions by binding a substrate to form an enzyme-substrate complex,
      then releasing product. As substrate concentration increases, reaction rate increases too
      — but it levels off at a ceiling called Vmax, the rate once every enzyme molecule is
      saturated. Km is the substrate concentration at half of Vmax: a smaller Km means the
      enzyme binds its substrate more tightly.`,
    questions: [
      {
        q: "At very high substrate concentration, reaction rate approaches...",
        options: ["Zero", "Vmax", "Km", "It keeps increasing forever"],
        correct: 1,
        explain: "Once every enzyme is saturated with substrate, rate plateaus at Vmax.",
      },
      {
        q: "Km is best described as...",
        options: [
          "The maximum reaction rate",
          "The substrate concentration at half of Vmax",
          "The number of active sites on an enzyme",
          "The temperature at which an enzyme denatures",
        ],
        correct: 1,
        explain: "Km is the [substrate] where the reaction runs at half its maximum rate.",
      },
      {
        q: "A lower Km generally means...",
        options: [
          "Weaker binding between enzyme and substrate",
          "Tighter binding between enzyme and substrate",
          "The enzyme is inactive",
          "The reaction has no maximum rate",
        ],
        correct: 1,
        explain: "Less substrate is needed to reach half-max rate, so binding is tighter.",
      },
    ],
  },
  {
    id: "action-potential",
    title: "The Neuron Action Potential",
    section: "Bio/Biochem",
    visualSvg: `
      <svg viewBox="0 0 300 180" class="lesson-svg" role="img" aria-label="Voltage spike of a neuron action potential over time">
        <line x1="40" y1="150" x2="280" y2="150" class="svg-axis" />
        <line x1="40" y1="150" x2="40" y2="20" class="svg-axis" />
        <text x="150" y="172" class="svg-label" text-anchor="middle">Time</text>
        <text x="16" y="85" class="svg-label" text-anchor="middle" transform="rotate(-90 16 85)">Voltage</text>
        <line x1="40" y1="120" x2="280" y2="120" class="svg-guide" stroke-dasharray="4 4" />
        <text x="284" y="124" class="svg-label">Rest</text>
        <path d="M 40 120 L 110 120 C 130 30, 150 30, 165 45 C 185 70, 195 140, 220 130 C 240 122, 260 120, 280 120"
              class="svg-curve" fill="none" />
        <text x="128" y="26" class="svg-label" text-anchor="middle">Depolarize</text>
        <text x="200" y="150" class="svg-label" text-anchor="middle">Repolarize</text>
      </svg>`,
    video: [
      { title: "Resting potential", narration: "A neuron at rest sits around negative 70 millivolts, more negative inside than outside." },
      { title: "Sodium rushes in", narration: "A strong enough stimulus opens sodium channels, and sodium rushes into the cell." },
      { title: "Threshold and firing", narration: "This depolarizes the cell. If it crosses threshold, the action potential fires." },
      { title: "Repolarization", narration: "At the peak, sodium channels close and potassium channels open, letting the cell repolarize." },
      { title: "Hyperpolarization", narration: "The cell briefly dips below resting potential before settling back to rest." },
    ],
    text: `A resting neuron sits around -70 millivolts. A strong enough stimulus opens sodium
      channels, sodium rushes in, and the cell depolarizes. If it crosses threshold, an action
      potential fires: sodium channels close and potassium channels open at the peak, repolarizing
      the cell, which briefly dips below resting potential (hyperpolarization) before settling
      back to rest.`,
    questions: [
      {
        q: "During depolarization, which ion mainly flows into the neuron?",
        options: ["Potassium", "Sodium", "Chloride", "Calcium"],
        correct: 1,
        explain: "Voltage-gated sodium channels open first, letting Na+ rush in.",
      },
      {
        q: "An action potential fires only if the stimulus...",
        options: [
          "Is below threshold",
          "Reaches or exceeds threshold",
          "Comes from a sensory neuron",
          "Occurs during hyperpolarization",
        ],
        correct: 1,
        explain: "Action potentials are all-or-nothing: threshold must be met or exceeded.",
      },
      {
        q: "Repolarization happens mainly because...",
        options: [
          "Sodium keeps flowing in",
          "Potassium flows out of the cell",
          "The cell membrane dissolves",
          "Calcium floods the axon terminal",
        ],
        correct: 1,
        explain: "Potassium channels open and K+ leaves, bringing voltage back down.",
      },
    ],
  },
  {
    id: "buffers-hh",
    title: "Buffers & the Henderson-Hasselbalch Equation",
    section: "Chem/Phys",
    visualSvg: `
      <svg viewBox="0 0 300 180" class="lesson-svg" role="img" aria-label="Titration curve with a flat buffering region around the pKa">
        <line x1="40" y1="150" x2="280" y2="150" class="svg-axis" />
        <line x1="40" y1="150" x2="40" y2="20" class="svg-axis" />
        <text x="150" y="172" class="svg-label" text-anchor="middle">Base added</text>
        <text x="16" y="85" class="svg-label" text-anchor="middle" transform="rotate(-90 16 85)">pH</text>
        <rect x="110" y="70" width="70" height="60" class="svg-zone" />
        <path d="M 40 140 C 90 132, 105 100, 145 100 S 200 68, 280 40" class="svg-curve" fill="none" />
        <text x="145" y="96" class="svg-label" text-anchor="middle">pKa</text>
        <text x="145" y="150" class="svg-label" text-anchor="middle">buffering region</text>
      </svg>`,
    video: [
      { title: "What a buffer does", narration: "A buffer resists big pH swings when you add small amounts of acid or base." },
      { title: "Weak acid pair", narration: "It's usually a weak acid paired with its conjugate base." },
      { title: "The equation", narration: "The Henderson-Hasselbalch equation links pH to that ratio: pH equals pKa plus the log of base over acid." },
      { title: "Strongest buffering", narration: "When the acid and base are in equal amounts, pH equals pKa. That's where buffering is strongest." },
      { title: "Away from pKa", narration: "Far from that point, the solution has much less buffering capacity." },
    ],
    text: `A buffer resists big pH swings when small amounts of acid or base are added. It's
      usually a weak acid paired with its conjugate base. The Henderson-Hasselbalch equation,
      pH = pKa + log([A-]/[HA]), links pH to that ratio. When the acid and base are present in
      equal amounts, pH equals pKa, and buffering is strongest; far from that point, the
      solution buffers much less well.`,
    questions: [
      {
        q: "A buffer is most effective when...",
        options: [
          "It contains only a strong acid",
          "The weak acid and its conjugate base are present in roughly equal amounts",
          "The pH is far from the pKa",
          "It contains no conjugate base",
        ],
        correct: 1,
        explain: "Buffering capacity is highest when [A-] and [HA] are roughly equal, near pH = pKa.",
      },
      {
        q: "In the Henderson-Hasselbalch equation, when [A-] equals [HA], pH equals...",
        options: ["0", "7", "pKa", "14"],
        correct: 2,
        explain: "log(1) = 0, so pH = pKa + 0 = pKa.",
      },
      {
        q: "A buffer resists pH change by...",
        options: [
          "Preventing any acid or base from entering the solution",
          "Neutralizing small additions of acid or base using the conjugate pair",
          "Raising the temperature",
          "Removing water from the solution",
        ],
        correct: 1,
        explain: "The conjugate acid/base pair absorbs added H+ or OH- to limit the pH shift.",
      },
    ],
  },
];
