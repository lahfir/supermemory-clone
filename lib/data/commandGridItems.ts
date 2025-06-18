export const commandGridItems = [
  {
    command: '$ init vector_database',
    errors: [
      { message: 'Way too expensive. Time to switch.', type: 'error' },
      { message: 'Painfully slow. Let\'s try another.', type: 'error' },
      { message: 'Won\'t scale. Back to square one.', type: 'error' },
      { message: 'Maintenance nightmare. Need alternatives.', type: 'error' },
    ]
  },
  {
    command: '$ choose embedding_model',
    errors: [
      { message: 'Which model fits your use case?', type: 'warning' },
      { message: 'Confusing performance tradeoffs', type: 'warning' },
      { message: 'Can\'t keep up with new releases', type: 'warning' },
    ]
  },
  {
    command: '$ handle format_parsing',
    errors: [
      { message: 'Markdown: Tables break everything', type: 'error' },
      { message: 'HTML: Scripts and styles interfere', type: 'error' },
      { message: 'PDF: Layout ruins extraction', type: 'error' },
      { message: 'Word docs: Unpredictable formatting', type: 'error' },
    ]
  },
  {
    command: '$ calculate scaling_costs',
    errors: [
      { message: 'Costs explode at production scale', type: 'warning' },
      { message: 'Performance degrades as data grows', type: 'warning' },
      { message: 'Engineering hours pile up fast', type: 'warning' },
    ]
  },
  {
    command: '$ setup connection_sync',
    errors: [
      { message: 'Sync failures between data sources', type: 'error' },
      { message: 'API rate limits during large syncs', type: 'error' },
      { message: 'Images: Need vision models now?', type: 'error' },
      { message: 'Audio/Video: Transcription costs soar', type: 'error' },
    ]
  },
  {
    command: '$ init multimodal_support',
    errors: [
      { message: 'Websites: JS & rate limits are messy', type: 'error' },
      { message: 'PDFs: OCR fails, extraction inconsistent', type: 'error' },
      { message: 'Authentication tokens expire constantly', type: 'error' },
    ]
  },
];