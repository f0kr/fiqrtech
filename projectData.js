// Project categories and data for Our Work page

export const categories = [
    { id: 'programming', label: 'Programming', colorClass: 'category-programming' },
    { id: 'design', label: 'Design', colorClass: 'category-design' },
    { id: 'advertising', label: 'Advertising', colorClass: 'category-advertising' },
    { id: 'marketing', label: 'Marketing', colorClass: 'category-marketing' }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Solution",
      shortDescription: "A custom e-commerce platform with advanced product filtering, real-time inventory, and seamless checkout experience.",
      fullDescription: "A comprehensive e-commerce solution designed for scalability and performance. This platform features advanced product filtering, real-time inventory management, and a seamless checkout experience optimized for conversion. The platform was built with modern frameworks ensuring fast loading times and a responsive design across all devices.",
      category: "programming",
      categoryDisplay: "Programming",
      year: "2023",
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Stripe API", "AWS S3", "Redis"],
      technologiesDisplay: "React, Node.js, MongoDB",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Intelligent product recommendation engine",
        "Advanced filtering and search functionality",
        "Real-time inventory tracking system",
        "One-page checkout with multiple payment options",
        "Customer account management dashboard"
      ],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/project",
      testimonial: {
        quote: "The team delivered an exceptional e-commerce platform that exceeded our expectations. Sales increased by 43% in the first quarter after launch, and the site's performance metrics are outstanding.",
        author: "Robert Johnson",
        position: "Digital Director, RetailCo",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 2,
      title: "HealthTrack Mobile App",
      shortDescription: "A full-stack health tracking application built with React Native, featuring user authentication, activity tracking, and health insights.",
      fullDescription: "A comprehensive health tracking application that allows users to monitor their fitness goals, nutrition intake, and overall health metrics. The app features user authentication, activity tracking, personalized health insights, and integration with popular fitness devices.",
      category: "programming",
      categoryDisplay: "Programming",
      year: "2023",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express", "MongoDB", "AWS"],
      technologiesDisplay: "React Native, Firebase, Node.js",
      imageUrl: "https://images.unsplash.com/photo-1616169201999-0d80789e6563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Secure user authentication and profile management",
        "Real-time progress tracking and visualization",
        "Integration with wearable devices",
        "Personalized nutrition plans",
        "Community challenges and achievements"
      ],
      demoUrl: "https://example.com/healthtrack-demo",
      testimonial: {
        quote: "HealthTrack transformed our approach to fitness app development. User engagement has increased by 78% since launch, and the retention metrics are impressive.",
        author: "Sarah Williams",
        position: "CEO, FitLife Health",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1616169201999-0d80789e6563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1616169201999-0d80789e6563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 3,
      title: "Corporate Brand Identity",
      shortDescription: "Complete brand identity redesign for a finance company, including logo, color palette, typography, and brand guidelines.",
      fullDescription: "A comprehensive brand identity redesign for a financial services company looking to refresh their image and appeal to a younger demographic while maintaining trust with existing clients. The project included a new logo, color palette, typography system, and detailed brand guidelines.",
      category: "design",
      categoryDisplay: "Design",
      year: "2022",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Brand Strategy"],
      technologiesDisplay: "Adobe Suite, Figma, Brand Strategy",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Logo design with responsive variations",
        "Comprehensive color palette with accessibility considerations",
        "Typography system with primary and secondary fonts",
        "Print and digital asset templates",
        "Detailed brand guidelines document"
      ],
      demoUrl: "https://example.com/branding-demo",
      testimonial: {
        quote: "The brand identity redesign transformed our company's perception in the market. We've seen a 32% increase in brand recognition and a significant improvement in customer engagement.",
        author: "Michael Chen",
        position: "CMO, Financial Solutions Inc.",
        avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 4,
      title: "UI/UX Redesign for Banking App",
      shortDescription: "Complete UX/UI redesign for a banking application focusing on accessibility, security, and intuitive financial management.",
      fullDescription: "A complete UX/UI redesign for a banking application focusing on accessibility, security, and intuitive financial management. This project reimagined the digital banking experience with a user-centered approach that simplifies complex financial operations and enhances security features while maintaining a clean and modern interface.",
      category: "design",
      categoryDisplay: "Design",
      year: "2022",
      technologies: ["Figma", "Adobe XD", "Sketch", "Protopie", "User Research", "Usability Testing"],
      technologiesDisplay: "Figma, Adobe XD, User Research",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Simplified yet secure authentication flow",
        "Intuitive financial dashboard with customizable widgets",
        "Accessible design compliant with WCAG 2.1 AA standards",
        "Biometric security integration",
        "Personalized financial insights and recommendations"
      ],
      demoUrl: "https://example.com/banking-ux-demo",
      testimonial: {
        quote: "The redesign increased our mobile banking usage by 47% and significantly reduced customer support calls related to navigation issues. The user feedback has been overwhelmingly positive.",
        author: "Jennifer Lopez",
        position: "Head of Digital, First National Bank",
        avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 5,
      title: "Holiday Season Campaign",
      shortDescription: "Integrated holiday marketing campaign for a retail chain, including social media, email marketing, and in-store promotions.",
      fullDescription: "A comprehensive holiday season marketing campaign for a major retail chain that spanned digital and traditional channels. The campaign included social media content, email marketing sequences, PPC advertising, and in-store promotional materials, all unified under a cohesive creative direction.",
      category: "advertising",
      categoryDisplay: "Advertising",
      year: "2023",
      technologies: ["Adobe Creative Suite", "Social Media Platforms", "Email Marketing Tools", "Google Ads", "Analytics"],
      technologiesDisplay: "Social Media, Email Marketing, Google Ads",
      imageUrl: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Cohesive creative direction across all channels",
        "Engaging social media content calendar",
        "Personalized email marketing sequences",
        "Strategic PPC campaign with optimized bidding",
        "Eye-catching in-store promotional materials"
      ],
      demoUrl: "https://example.com/holiday-campaign",
      testimonial: {
        quote: "The holiday campaign exceeded all our expectations. We saw a 52% increase in seasonal sales compared to the previous year and our social media engagement metrics reached record highs.",
        author: "David Thompson",
        position: "Marketing Director, Retail Group",
        avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 6,
      title: "Product Launch Campaign",
      shortDescription: "Comprehensive product launch strategy and execution for a tech startup's innovative IoT device.",
      fullDescription: "A multi-channel product launch campaign for a tech startup's innovative IoT device. The campaign included brand positioning, messaging strategy, press relations, digital advertising, and launch event planning to maximize market impact and drive initial sales.",
      category: "advertising",
      categoryDisplay: "Advertising",
      year: "2022",
      technologies: ["Media Planning", "Content Creation", "PR Strategy", "Event Planning", "Digital Advertising"],
      technologiesDisplay: "Media Planning, Content Creation, PR",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Strategic brand positioning and messaging",
        "Press kit and media relations campaign",
        "Targeted digital advertising",
        "Product launch event planning and execution",
        "Influencer partnership program"
      ],
      demoUrl: "https://example.com/launch-campaign",
      testimonial: {
        quote: "The product launch campaign put our startup on the map. We secured coverage in major tech publications, sold out our initial inventory in 48 hours, and established strong brand recognition in a competitive market.",
        author: "Amanda Rodriguez",
        position: "CEO, TechInnovate",
        avatarUrl: "https://randomuser.me/api/portraits/women/52.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 7,
      title: "SEO & Content Strategy",
      shortDescription: "Comprehensive SEO and content marketing strategy for an educational platform, resulting in 200% organic traffic growth.",
      fullDescription: "A holistic SEO and content marketing strategy for an educational platform looking to increase their online visibility and lead generation. The project included technical SEO audits, competitive analysis, keyword research, content planning, and implementation guidance resulting in significant organic traffic growth.",
      category: "marketing",
      categoryDisplay: "Marketing",
      year: "2023",
      technologies: ["SEO Tools", "Content Marketing", "Analytics", "Keyword Research", "Technical SEO"],
      technologiesDisplay: "SEO, Content Marketing, Analytics",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Technical SEO audit and implementation plan",
        "Comprehensive keyword research and mapping",
        "Content calendar and creation guidelines",
        "Link building strategy",
        "Regular performance reporting and optimization"
      ],
      demoUrl: "https://example.com/seo-case-study",
      testimonial: {
        quote: "The SEO and content strategy developed for our platform resulted in a 200% increase in organic traffic within 6 months and a 150% increase in qualified leads. The ROI has been exceptional.",
        author: "James Wilson",
        position: "Director of Growth, EduLearn",
        avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    },
    {
      id: 8,
      title: "Social Media Growth Campaign",
      shortDescription: "Strategic social media marketing campaign for a consumer brand that increased followers by 300% and engagement by 500%.",
      fullDescription: "A comprehensive social media marketing strategy for a consumer brand looking to increase their digital presence and engagement with their target audience. The campaign included content strategy, community management, paid social advertising, influencer partnerships, and detailed analytics tracking.",
      category: "marketing",
      categoryDisplay: "Marketing",
      year: "2022",
      technologies: ["Social Media Management", "Content Creation", "Paid Social", "Influencer Marketing", "Analytics"],
      technologiesDisplay: "Social Media, Paid Advertising, Analytics",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      features: [
        "Platform-specific content strategy",
        "Community engagement and management plan",
        "Targeted paid social advertising campaigns",
        "Strategic influencer partnerships",
        "Comprehensive analytics and reporting dashboard"
      ],
      demoUrl: "https://example.com/social-media-case-study",
      testimonial: {
        quote: "The social media campaign transformed our online presence. We've seen a 300% increase in followers, 500% increase in engagement, and most importantly, a 200% increase in social-driven conversions.",
        author: "Emily Chang",
        position: "Digital Marketing Manager, Consumer Goods Co.",
        avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      gallery: [
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
      ]
    }
  ];