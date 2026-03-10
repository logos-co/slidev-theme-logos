import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    fontFamily: 'Times, Georgia, serif',
    block: {
      'padding': 20,
    },
    themeVariables: {
      // Background & text
      primaryColor: '#E2E0C9',          // --color-parchment
      primaryTextColor: '#0E2618',      // --color-forest
      primaryBorderColor: '#4E635E',    // --color-sage

      secondaryColor: '#DDDED8',        // --color-warm-gray
      secondaryTextColor: '#0E2618',    // --color-forest
      secondaryBorderColor: '#4E635E',  // --color-sage

      tertiaryColor: '#E5E5E5',         // --color-gray
      tertiaryTextColor: '#0E2618',     // --color-forest
      tertiaryBorderColor: '#B8BDB8',   // --color-gray-02

      // Lines & labels
      lineColor: '#4E635E',             // --color-sage
      textColor: '#0E2618',             // --color-forest

      // Flowchart
      nodeBorder: '#4E635E',            // --color-sage
      mainBkg: '#E2E0C9',               // --color-parchment
      clusterBkg: '#DDDED8',            // --color-warm-gray
      clusterBorder: '#4E635E',         // --color-sage

      // Sequence diagram
      actorBkg: '#E2E0C9',              // --color-parchment
      actorBorder: '#4E635E',           // --color-sage
      actorTextColor: '#0E2618',        // --color-forest
      actorLineColor: '#4E635E',        // --color-sage
      signalColor: '#0E2618',           // --color-forest
      signalTextColor: '#0E2618',       // --color-forest
      activationBkgColor: '#DDDED8',    // --color-warm-gray
      activationBorderColor: '#4E635E', // --color-sage
      sequenceNumberColor: '#FFFFFF',   // --color-white
      noteBkgColor: '#E2E0C9',          // --color-parchment
      noteBorderColor: '#4E635E',       // --color-sage
      noteTextColor: '#0E2618',         // --color-forest

      // Labels
      labelBoxBkgColor: '#E2E0C9',      // --color-parchment
      labelBoxBorderColor: '#4E635E',   // --color-sage
      labelTextColor: '#0E2618',        // --color-forest

      // Accent (for highlights, critical paths, etc.)
      critBorderColor: '#E46962',       // --color-coral
      critBkgColor: '#E46962',          // --color-coral

      // Gantt
      taskBkgColor: '#E2E0C9',          // --color-parchment
      taskBorderColor: '#4E635E',       // --color-sage
      taskTextColor: '#0E2618',         // --color-forest
      activeTaskBkgColor: '#E46962',    // --color-coral
      activeTaskBorderColor: '#0E2618', // --color-forest
      doneTaskBkgColor: '#B8BDB8',      // --color-gray-02
      doneTaskBorderColor: '#4E635E',   // --color-sage

      // Pie
      pie1: '#E2E0C9',                  // --color-parchment
      pie2: '#E46962',                  // --color-coral
      pie3: '#FA7B17',                  // --color-orange
      pie4: '#4E635E',                  // --color-sage
      pie5: '#808C78',                  // --color-muted
      pie6: '#0E2618',                  // --color-forest
    },
  }
})