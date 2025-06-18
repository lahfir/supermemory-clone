import { FeatureItem } from "@/types";

export const featuresData: FeatureItem[] = [
    {
        number: '01.',
        subtitle: 'Your data grows. Supermemory keeps up',
        title: 'Enterprise-Grade Performance at Any Scale',
        description: 'Supermemory is built to handle billions of data points with low-latency retrieval — whether you\'re indexing documents, video, or structured product data.'
    },
    {
        number: '02.',
        subtitle: 'No heavy lifting. Just smart, connected infrastructure',
        title: 'Seamless Integration Across Teams & Tools',
        description: 'Connect directly to your existing stack — from Notion to Google Drive to custom CRMs — with flexible APIs and SDKs that let every team tap into memory instantly.'
    },
    {
        number: '03.',
        subtitle: 'Own your data. Maintain compliance. Stay in control',
        title: 'Secure by Design. Fully Controllable.',
        description: 'Deploy Supermemory in the cloud, on-prem, or directly on-device — with full control over where and how your data is stored.'
    }
];


export const featureItems = [
    {
        icon: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06565_icon-features-grid_03.png",
        category: "Interoperability",
        title: "Model-interoperable APIs",
        description: "Supermemory works with any LLM provider. So you can keep switching, without lock-in.\nSwitch between models. keep your memory."
    },
    {
        icon: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06563_icon-features-grid_02.png",
        category: "Performance",
        title: "Sub-400ms latency at scale",
        description: "Supermemory is built for speed and scale. We re-imagined RAG to be faster and more efficient."
    },
    {
        icon: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06564_icon-features-grid_04.png",
        category: "Tooling",
        title: "Works with AI SDK, Langchain, and more",
        description: "Supermemory works with any LLM provider. So you can keep switching, without lock-in."
    },
    {
        icon: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06562_icon-features-grid_01.png",
        logos: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06566_Logos.svg",
        category: "Language Agnostic",
        title: "Deploy in a day, not months",
        description: "SDKs available for Python and Javascript.",
        link: {
            text: "Learn more",
            url: "https://docs.supermemory.ai/sdks/typescript"
        }
    }
];

export const bigFeature = {
    icon: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06567_icon-features-grid_05.png",
    category: "EFFICIENCY",
    title: "Best in class performance",
    description: "Supermemory delivers stronger precision and recall at every benchmark. And it's ridiculously easy to start.",
    chart: {
        title: "comparison of evaluation metrics:",
        subtitle: "supermemory vs major memory provider",
        image: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06568_Frame%2020.svg"
    }
};
