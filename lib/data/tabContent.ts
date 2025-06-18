import { TabContent } from "@/types";

export const tabContents: TabContent[] = [
    {
        label: 'Add memories',
        content: {
            language: 'javascript',
            code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf'
    },
    body: JSON.stringify({
      content: 'You can add text',
        // or a url https://example.com 
        // or pdfs, videos, images. https://example.com/page.pdf
      metadata: {
        user_id: '123'
      }
    }),
  })
  
  const data = await response.json()`,
            html: `<span style="color:#7928a1">const</span><span> response = </span><span style="color:#7928a1">await</span><span> fetch(</span><span style="color:#008000">'https://api.supermemory.ai/v3/memories'</span><span>, {
  </span><span>  </span><span class="hljs-attr">method</span><span>: </span><span style="color:#008000">'POST'</span><span>,
  </span><span>  </span><span class="hljs-attr">headers</span><span>: {
  </span><span>    </span><span style="color:#008000">'Authorization'</span><span>: </span><span style="color:#008000">'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf'</span><span>
  </span>  },
  <span>  </span><span class="hljs-attr">body</span><span>: </span><span style="color:#aa5d00">JSON</span><span>.stringify({
  </span><span>    </span><span class="hljs-attr">content</span><span>: </span><span style="color:#008000">'You can add text'</span><span>,
  </span><span>      </span><span style="color:#696969">// or a url https://example.com </span><span>
  </span><span>      </span><span style="color:#696969">// or pdfs, videos, images. https://example.com/page.pdf</span><span>
  </span><span>    </span><span class="hljs-attr">metadata</span><span>: {
  </span><span>      </span><span class="hljs-attr">user_id</span><span>: </span><span style="color:#008000">'123'</span><span>
  </span>    }
    }),
  })
  
  <span></span><span style="color:#7928a1">const</span><span> data = </span><span style="color:#7928a1">await</span><span> response.json()</span>`
        }
    },
    {
        label: 'Search memories',
        content: {
            language: 'javascript',
            code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf',
    },
    body: JSON.stringify({
      q: "What's my name?"
    })
  })
  
  const data = await response.json()`,
            html: `<span style="color:#7928a1">const</span><span> response = </span><span style="color:#7928a1">await</span><span> fetch(</span><span style="color:#008000">'https://api.supermemory.ai/v3/memories'</span><span>, {
  </span><span>  </span><span class="hljs-attr">method</span><span>: </span><span style="color:#008000">'GET'</span><span>,
  </span><span>  </span><span class="hljs-attr">headers</span><span>: {
  </span><span>    </span><span style="color:#008000">'Authorization'</span><span>: </span><span style="color:#008000">'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf'</span><span>,
  </span>  },
  <span>  </span><span class="hljs-attr">body</span><span>: </span><span style="color:#aa5d00">JSON</span><span>.stringify({
  </span><span>    </span><span class="hljs-attr">q</span><span>: </span><span style="color:#008000">"What's my name?"</span><span>
  </span>  })
  })
  
  <span></span><span style="color:#7928a1">const</span><span> data = </span><span style="color:#7928a1">await</span><span> response.json()</span>`
        }
    },
    {
        label: 'Connect apps',
        content: {
            language: 'javascript',
            code: `const response = await fetch('https://api.supermemory.ai/v3/connections/onedrive', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf',
    }
  });
  
  const data = await response.json();`,
            html: `<span style="color:#7928a1">const</span><span> response = </span><span style="color:#7928a1">await</span><span> fetch(</span><span style="color:#008000">'https://api.supermemory.ai/v3/connections/onedrive'</span><span>, {
  </span><span>  </span><span class="hljs-attr">method</span><span>: </span><span style="color:#008000">'POST'</span><span>,
  </span><span>  </span><span class="hljs-attr">headers</span><span>: {
  </span><span>    </span><span style="color:#008000">'Authorization'</span><span>: </span><span style="color:#008000">'Bearer sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf'</span><span>,
  </span>  }
  });
  
  <span></span><span style="color:#7928a1">const</span><span> data = </span><span style="color:#7928a1">await</span><span> response.json();</span>`
        }
    },
];