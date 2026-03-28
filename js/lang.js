// 语言包
const i18n = {
  zh: {
    logo: "一带一路国际文化经济交流中心",
    nav1: "中心概览",
    nav2: "核心基石",
    nav3: "赋能闭环",
    nav4: "生态网络",
    nav5: "动态实践",
    nav6: "在线服务",
    banner_title: "构筑数字丝绸之路新枢纽<br>打造文化经济新生态",
    banner_desc: "以权威登记、全球流通、深度交融与艺术产业金融引领发展，实现文明互鉴、经济共赢。",
    banner_btn: "进入在线服务大厅",
    overview_title: "中心概览 · 战略定位与核心基石",
    overview_content: "本中心是国家顶层设计下，破解文化资产确权难、流通难、变现难的创新综合服务平台。以三大核心功能为支撑，构建权益保障、渠道畅通、价值深化的完整体系。<br><br>使命：打造权属清晰、流转顺畅、价值倍增的全球化文化经济新体系，推动中华文化复兴与一带一路文明互鉴。<br>价值观：服务、创新、协调、绿色、开放、共享。",
    mission: "使命",
    mission_text: "打造权属清晰、流转顺畅、价值倍增的全球化文化经济新体系，推动中华文化复兴与一带一路文明互鉴。",
    values: "价值观",
    values_text: "服务、创新、协调、绿色、开放、共享。",
    core_title: "核心基石 · 三位一体战略支撑",
    core1: "中国动产登记中心",
    core1_desc: "法定确权基石，提供文化艺术品、数字资产法律登记、权属确认、备案查询，建立国际互认机制。",
    core2: "一带一路动产流通中心",
    core2_desc: "跨境通联枢纽，提供一站式跨境流通服务，构建文化资产走向世界的高速公路。",
    core3: "国际艺术产业交流中心",
    core3_desc: "生态交融平台，举办国际巡展、学术论坛、产业峰会，实现文明深度交融。",
    enable_title: "赋能闭环 · 六大核心价值节点",
    enable1: "文化银行 & 文物银行",
    enable1_desc: "双轮金融驱动，提供抵押、质押、基金、信托、证券化与文物收储托管服务。",
    enable2: "艺术品国际交易中心",
    enable2_desc: "全球价值市场，支持拍卖、寄卖、典当、易货与跨境巡展交易。",
    enable3: "研究院·博物馆·禅意中华",
    enable3_desc: "学术研究、鉴定评估、展览展示、文创开发与文化传播矩阵。",
    ecology_title: "生态网络 · 十大要素协同共生",
    eco1: "软实力支撑",
    eco1_desc: "服务、人才、传媒、智库，构建一站式服务体系与行业大脑。",
    eco2: "硬核驱动力",
    eco2_desc: "数智、金融、科贸、产业，以科技与金融赋能实体经济融合。",
    eco3: "创新拓展路径",
    eco3_desc: "易货贸易盘活存量，国际产能合作推动跨境协同生产与贸易升级。",
    news_title: "动态实践 · 价值呈现与成果见证",
    news1: "成功案例库",
    news1_desc: "展示全流程文化资产运营案例，以真实成果增强市场信任。",
    news2: "全球交流动态",
    news2_desc: "国际文化展、论坛、交流活动实时发布，展现全球影响力。",
    news3: "新闻与活动日历",
    news3_desc: "政策解读、平台公告、拍卖会、培训与学术活动预告。",
    service_title: "在线服务大厅 · 一站式数字端口",
    s1: "动产登记申请",
    s2: "流通服务预约",
    s3: "金融融资咨询",
    s4: "艺术品交易中心",
    s5: "资产信息查询",
    s6: "国际合作对接",
    service_tip: "支持多语言、统一用户中心、资产看板、公共查询，实现一网通办、全球通达。",
    footer1: "一带一路国际文化经济交流中心 | 数字丝绸之路新枢纽",
    footer2: "© 2025 版权所有"
  },
  en: {
    logo: "The Belt and Road International Center for Cultural and Economic Exchange",
    nav1: "About Us",
    nav2: "Core Foundations",
    nav3: "Empowerment System",
    nav4: "Ecological Network",
    nav5: "News & Practices",
    nav6: "Online Service",
    banner_title: "Build a New Hub for the Digital Silk Road<br>Create a New Ecology of Cultural Economy",
    banner_desc: "Leading development with authoritative registration, global circulation, in-depth integration and art industry finance, achieving mutual learning and win-win results.",
    banner_btn: "Enter Online Service Hall",
    overview_title: "About Us · Strategic Positioning & Core Cornerstones",
    overview_content: "An innovative comprehensive service platform established under national top-level design to solve the problems of confirmation, circulation and realization of cultural assets. Supported by three core functions.<br><br>Mission: Build a global cultural and economic system with clear ownership, smooth circulation and increasing value.<br>Values: Service, Innovation, Coordination, Green, Openness, Sharing.",
    mission: "Mission",
    mission_text: "Build a global cultural and economic system with clear ownership, smooth circulation and increasing value.",
    values: "Values",
    values_text: "Service, Innovation, Coordination, Green, Openness, Sharing.",
    core_title: "Core Foundations · Trinity Strategic Support",
    core1: "China Movable Property Registration Center",
    core1_desc: "Legal confirmation cornerstone, providing legal registration, ownership confirmation and inquiry services.",
    core2: "B&R Movable Property Circulation Center",
    core2_desc: "Cross-border circulation hub providing one-stop cross-border services for cultural assets.",
    core3: "International Art Industry Exchange Center",
    core3_desc: "Holding international exhibitions, forums and summits to achieve in-depth integration of civilizations.",
    enable_title: "Empowerment System · Six Core Value Nodes",
    enable1: "Cultural Bank & Relic Bank",
    enable1_desc: "Providing mortgages, funds, trusts, securitization and relic storage & trusteeship.",
    enable2: "International Art Trading Center",
    enable2_desc: "Auction, consignment, pawn, barter and cross-border exhibition trading.",
    enable3: "Research Institute · Museum · Zen China",
    enable3_desc: "Academic research, appraisal, exhibition, cultural innovation and communication.",
    ecology_title: "Ecological Network · Symbiosis of Ten Elements",
    eco1: "Soft Power Support",
    eco1_desc: "Service, Talent, Media, Think Tank — building a one-stop service system.",
    eco2: "Hard Core Driving Force",
    eco2_desc: "Digital Intelligence, Finance, Technology & Trade, Industry — empowering real economy.",
    eco3: "Innovative Development Path",
    eco3_desc: "Barter trade and international capacity cooperation to promote cross-border industrial upgrading.",
    news_title: "News & Practices · Value Presentation & Achievements",
    news1: "Successful Cases",
    news1_desc: "Display full-process cases of cultural asset operation to enhance market trust.",
    news2: "Global Exchange News",
    news2_desc: "Release international cultural exhibitions, forums and exchange activities.",
    news3: "News & Events Calendar",
    news3_desc: "Policy interpretation, announcements, auctions, training and academic activities.",
    service_title: "Online Service Hall · One-stop Digital Portal",
    s1: "Registration Application",
    s2: "Circulation Service",
    s3: "Financing Consultation",
    s4: "Art Trading",
    s5: "Asset Inquiry",
    s6: "International Cooperation",
    service_tip: "Multi-language, user center, asset dashboard, public inquiry — one-stop global service.",
    footer1: "The Belt and Road International Center for Cultural and Economic Exchange | Digital Silk Road Hub",
    footer2: "© 2025 All Rights Reserved"
  }
};

// 切换语言
function setLang(lang) {
  document.documentElement.lang = lang;
  const list = document.querySelectorAll("[data-i18n]");
  list.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
}

// 按钮绑定
document.getElementById("zhBtn").onclick = () => setLang("zh");
document.getElementById("enBtn").onclick = () => setLang("en");

// 默认中文
setLang("zh");
