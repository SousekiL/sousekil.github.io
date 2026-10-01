// EN / 简体中文 switch. English stays in index.html; this file swaps visible text nodes for their Chinese
// translations and restores them on the way back. Section headings, labels, tags and the tagline stay in English.
// Keys are the English text exactly as it appears in index.html (trimmed). If a sentence changes there,
// update its key here too, or that sentence simply stays in English.
(() => {
  const ZH = {
    // Hero
    'I study society, cities, and risk through data. Trained in actuarial science and computational social science, I build statistical models, maps, and interactive tools, and publish the results as papers, visualizations, and short films.': '我用数据研究社会、城市与风险。我受过精算学和计算社会科学的训练，搭建统计模型、地图和交互工具，并把成果发表为论文、可视化作品和短片。',
    'Open to data science, actuarial & risk analytics roles.': '正在寻找数据科学、精算与风险分析方向的工作机会。',
    'Selected work': '精选作品',
    'What I work with': '能力与方法',
    'Xi’an Jiaotong University': '西安交通大学',
    'Nanjing University': '南京大学',
    'University of Illinois Urbana-Champaign': '伊利诺伊大学香槟分校',
    'Computational social science': '计算社会科学',
    'Actuarial science': '精算学',

    // Capabilities
    'Five things I do repeatedly, the methods behind each, and the projects on this page that show them.': '我反复在做的五件事、各自背后的方法，以及本页中能体现它们的项目。',
    'Statistical modelling': '统计建模',
    'GLMs · extreme value theory (GEV, POT–GPD) · Bayesian MCMC · Double LASSO · regression discontinuity · R, Python': '广义线性模型 · 极值理论（GEV、POT–GPD）· 贝叶斯 MCMC · Double LASSO · 断点回归 · R、Python',
    'Extreme precipitation': '极端降水',
    'DAO vote divergence': 'DAO 投票分歧',
    'Women poets': '女诗人',
    'Spatial analysis': '空间分析',
    'POI & hexagonal grids · OpenStreetMap routing · geocoding & historical gazetteers · dialect-distance clustering': 'POI 与六边形网格 · OpenStreetMap 路径规划 · 地理编码与历史地名 · 方言距离聚类',
    'Beijing vs. Shanghai': '北京 vs. 上海',
    'Borders vs. boundaries': '行政边界与文化边界',
    'Cultural center': '文化中心',
    'Networks & historical data': '网络与历史数据',
    'CBDB · Ming Qing Women’s Writings · record linkage · network construction and centrality · descriptive statistics across dynasties': 'CBDB · 明清妇女著作 · 记录链接 · 网络构建与中心性 · 跨朝代描述统计',
    'Women poets network': '女诗人网络',
    'Historical figures': '历史人物',
    'Women’s names': '女性名字',
    'Visualization & motion': '可视化与动态影像',
    'Canvas / D3 interactives · scroll-driven maps · Blender shaded relief · FFmpeg render pipelines · Skyfield ephemerides': 'Canvas / D3 交互 · 滚动驱动地图 · Blender 地形晕渲 · FFmpeg 渲染流程 · Skyfield 星历计算',
    'Tang & Song poets': '唐宋诗人',
    'Moon calendar': '月相日历',
    'Relief atlas': '地形图集',
    '29 visual studies': '29 项视觉研究',
    'AI-assisted practice': 'AI 辅助实践',
    'Coding agents from prototype to release · data preparation and validation scripts · AI-drafted composition, hand-finished cartography': '借助编程智能体从原型做到发布 · 数据准备与校验脚本 · AI 起草构图、人工完成制图',
    'codeg (open source)': 'codeg（开源）',

    // Selected work
    'Six projects across papers, maps, urban data, and motion. Everything else is in the archive below.': '六个项目，涵盖论文、地图、城市数据与动态影像。其余作品都在下方的档案里。',
    'Climate risk · paper, ASRM 595': '气候风险 · 论文，ASRM 595',
    'Extreme precipitation risk in Beijing, 1960–2024': '北京极端降水风险，1960–2024',
    'Both tails are heavy (ξ > 0). The 100-year daily rainfall lands between 245 mm (GEV) and 298 mm (POT–GPD); the threshold model is the more conservative guide for flood planning.': '两种模型估计的尾部都是厚尾（ξ > 0）。百年一遇日降水量介于 245 毫米（GEV）与 298 毫米（POT–GPD）之间；对防洪规划而言，阈值模型是更保守的参考。',
    'Paper (PDF) ↗': '论文 (PDF) ↗',
    'Slides (PDF) ↗': '幻灯片 (PDF) ↗',
    'Code ↗': '代码 ↗',
    'Governance · paper, iRisk Lab 2025': '治理 · 论文，iRisk Lab 2025',
    'On-chain and off-chain vote divergence in DAOs': 'DAO 链上与链下投票的分歧',
    '229 proposals across Uniswap, Arbitrum, Gitcoin, and Optimism. Governance effects persist, but divergence between the two votes weakens the value governance creates.': '覆盖 Uniswap、Arbitrum、Gitcoin 和 Optimism 的 229 项提案。治理效应依然存在，但两种投票之间的分歧会削弱治理创造的价值。',
    'Computational history · paper, SSRN': '计算历史 · 论文，SSRN',
    'Women poets and literary recognition in imperial China': '中国古代女诗人与文学认可',
    '443 poets, CBDB × MQWW. Non-kin social ties, not kinship, predicted publishing an individual collection: one s.d. more social degree roughly doubled the odds (OR ≈ 2.06), while the kinship effect was not distinguishable from zero.': '443 位诗人，CBDB × MQWW。能预测是否刊行个人诗集的是非亲属的社会关系，而不是亲属关系：社会关系度数每增加一个标准差，几率约翻一倍（OR ≈ 2.06），而亲属关系的效应与零无法区分。',
    'Paper ↗': '论文 ↗',
    'Live network ↗': '在线网络 ↗',
    'Interactive ↗': '交互 ↗',
    'Historical geography · interactive map': '历史地理 · 交互地图',
    'Journeys of Tang & Song poets': '唐宋诗人行迹',
    'Where 360 poets actually went: some 14,000 recorded stops traced on a paper-textured map, scroll by scroll.': '360 位诗人究竟去过哪里：约 14,000 个有记录的停留点，随滚动逐一描绘在纸质纹理的地图上。',
    'Live project ↗': '在线项目 ↗',
    'Repository ↗': '代码库 ↗',
    'Play · 2:41': '播放 · 2:41',
    'Astronomy & tides · motion, 2026': '天文与潮汐 · 动态影像，2026',
    'Moon calendar 2026': '2026 月相日历',
    'Summer solstice to the Mid-Autumn full moon: the moon’s phase over Hong Kong, the solar terms, and a rolling 24-hour tide at Quarry Bay.': '从夏至到中秋满月：香港上空的月相、二十四节气，以及鲗鱼涌滚动的 24 小时潮汐。',
    'Watch ↗': '观看 ↗',
    'Open video ↗': '打开视频 ↗',
    'English preview ↗': '英文预览 ↗',
    'Urban data · article, 2022 data': '城市数据 · 文章，2022 年数据',
    'Why does everywhere feel far away in Beijing?': '为什么在北京去哪儿都觉得远？',
    'Beijing inside the Fifth Ring vs. Shanghai inside the Outer Ring: services are more dispersed, population and commerce less aligned, and 10,000 sampled routes detour further.': '五环内的北京对比外环内的上海：北京的服务设施更分散，人口与商业的分布更错位，10,000 条抽样路线的绕行也更远。',
    'Original Chinese ↗': '中文原文 ↗',

    // Archive
    'All research, writing, visual work, and tools, in compact form. Chinese articles open with an English preview.': '全部研究、写作、视觉作品与工具的精简列表。中文文章附有英文预览。',
    'Paper': '论文',
    'Article': '文章',
    'Extension': '浏览器扩展',
    'Open source': '开源',
    'Regression discontinuity · 229 proposals · four DAOs': '断点回归 · 229 项提案 · 四个 DAO',
    'Slides ↗': '幻灯片 ↗',
    'GEV vs. POT–GPD · 99% VaR / ES · 100-year return level 245–298 mm': 'GEV vs. POT–GPD · 99% VaR / ES · 百年一遇重现水平 245–298 毫米',
    'CBDB × MQWW · Double LASSO · Bayesian MCMC — non-kin social ties, not kinship, predicted recognition': 'CBDB × MQWW · Double LASSO · 贝叶斯 MCMC — 预测文学认可的是非亲属社会关系，而不是亲属关系',
    'Gaode POI · 400 m hex grids · OSM routing · detour index — Beijing’s services are more dispersed and detours longer than Shanghai’s': '高德 POI · 400 米六边形网格 · OSM 路径规划 · 绕行系数 — 北京的服务设施比上海更分散，绕行也更长',
    'English ↗': '英文 ↗',
    'Gaokao competition structure across provinces': '各省高考竞争结构',
    'Score-frequency tables · Beta fitting · 985 opportunity ratio — high-pressure provinces split into narrow- and wide-access structures': '一分一段表 · Beta 分布拟合 · 985 机会比 — 高压力省份分为“窄通道”与“宽通道”两类结构',
    'Women’s names in ancient China': '中国古代女性的名字',
    'CBDB · name-presence rate · character frequency — named women are a small share of the women recorded at all': 'CBDB · 留名率 · 用字频率 — 留下名字的女性只占被记录女性的一小部分',
    'Administrative borders vs. cultural boundaries': '行政边界与文化边界',
    'Dialect distance · road distance · clustering — one province often holds several cultural regions': '方言距离 · 道路距离 · 聚类 — 一个省份往往包含多个文化区域',
    'China’s cultural center moves south': '中国文化中心的南移',
    'CBDB · geocoding · latitude distribution · TGI — the recorded center shifts from the north in Sui–Tang to the lower Yangtze by the Song': 'CBDB · 地理编码 · 纬度分布 · TGI — 有记录的中心从隋唐时的北方，到宋代移至长江下游',
    'Interactive · CBDB × MQWW · kinship, social ties, collections': '交互 · CBDB × MQWW · 亲属、社会关系、诗集',
    'Live ↗': '在线 ↗',
    'Historical figures network': '历史人物关系网络',
    'Interactive · searchable relationships across CBDB records': '交互 · 可检索 CBDB 记录中的人物关系',
    'Article ↗': '文章 ↗',
    'Interactive · scroll-driven bilingual map · 360 poets, ~14,000 stops': '交互 · 滚动驱动的双语地图 · 360 位诗人，约 14,000 个停留点',
    'City data visual': '城市数据可视化',
    'Archive · built space, population fields, terrain, hydrology ·': '档案 · 建成空间、人口场、地形、水文 ·',
    '29 studies on this page': '本页收录 29 项',
    'Methods ↗': '方法 ↗',
    'The Hard Road · 行路难': '行路难',
    'Film · 82 Tang poets’ recorded journeys, 617–907, on 3D terrain · 4:00': '影片 · 82 位唐代诗人有记录的行迹，617–907，呈现于三维地形之上 · 4:00',
    'Film ↗': '影片 ↗',
    'Unmoored · 不系之舟': '不系之舟',
    'Film · 280 poets from the Five Dynasties to the fall of the Song, 907–1279 · 5:34': '影片 · 从五代到宋亡的 280 位诗人，907–1279 · 5:34',
    'Taiwan coastal lights': '台湾灯塔与航标',
    'Motion · lighthouses and navigation lights, published light cycles · 0:30': '动态影像 · 灯塔与航标，依据公布的灯质周期 · 0:30',
    'Lightning season in China': '中国雷季',
    'Motion · FY-4A LMI optical lightning events, June–August 2023 · 0:20': '动态影像 · 风云四号 A 星 LMI 光学闪电事件，2023 年 6–8 月 · 0:20',
    'Motion · moon phase, solar terms, Quarry Bay tide · 2:41': '动态影像 · 月相、节气、鲗鱼涌潮汐 · 2:41',
    'Local-first YouTube learning extension: bilingual captions, transcription, contextual AI explanations, vocabulary and notes · beta, built with AI from prototype to release': '本地优先的 YouTube 学习扩展：双语字幕、语音转写、结合上下文的 AI 讲解、生词与笔记 · 测试版，借助 AI 从原型做到发布',
    'Frontend contributor to a multi-agent coding workbench (React / TypeScript): inline rendering of HTML visualizations from any coding agent, and sidebar filtering · merged and shipped in v0.32.3, built with coding agents from spec to review': '为一个多智能体编程工作台（React / TypeScript）贡献前端：内联渲染任意编程智能体生成的 HTML 可视化，以及侧边栏筛选 · 已合并并随 v0.32.3 发布，从需求到评审都借助编程智能体完成',

    // Ways of looking
    'View the complete archive': '查看完整档案',
    'Beijing': '北京', 'Shanghai': '上海', 'Shenzhen': '深圳', 'Changsha': '长沙', 'Guangzhou': '广州',
    'Nanjing': '南京', 'Hangzhou': '杭州', 'Xi\'an': '西安', 'Xi’an': '西安', 'Chengdu': '成都', 'Lhasa': '拉萨',
    'Dalian': '大连', 'Hong Kong': '香港', 'Taipei': '台北',
    'China': '中国', 'Mongolia': '蒙古', 'North Korea': '朝鲜', 'South Korea': '韩国', 'Japan': '日本',
    'Dialect relief / China': '方言地形 / 中国',
    'Hydrology / grayscale': '水文 / 灰度',
    'Terrain / hydrology': '地形 / 水文',
    'Population density': '人口密度',
    'County density profile': '县级密度剖面',
    'Dialect relief / China · Yangtze basin / four studies': '方言地形 / 中国 · 长江流域 / 四项研究',
    'Watch dialect motion ↗': '观看方言动态 ↗',
    'Watch Yangtze motion ↗': '观看长江流域动态 ↗',
    'Urban population fields / five cities': '城市人口场 / 五座城市',
    'Open archive ↗': '打开档案 ↗',
    'Life expectancy / five country series · 1950–2023': '预期寿命 / 五国系列 · 1950–2023',
    'Watch motion studies ↗': '观看动态研究 ↗',
    'Four terrain studies built through an AI-assisted workflow, from geospatial preparation and composition to Blender shading and final cartographic refinement.': '四幅地形研究，经由 AI 辅助的工作流程完成：从地理数据准备、构图，到 Blender 着色和最后的制图修饰。',
    'Terrain data': '地形数据',
    'DEM clipping, reprojection, and vertical exaggeration': 'DEM 裁剪、重投影与垂直夸张',
    'Composition': '构图',
    'Framing, extent, and color studies drafted with AI': '取景、范围与配色方案由 AI 起草',
    'Blender render': 'Blender 渲染',
    'Displacement, lighting, and shaded relief': '置换、光照与地形晕渲',
    'Cartographic finish': '制图收尾',
    'Labels, borders, and color correction': '标注、边界与色彩校正',
    'China / a relief atlas': '中国 / 地形图集',
    'Vintage shaded relief · provincial color study': '复古地形晕渲 · 分省配色研究',
    'Fujian & Taiwan': '福建与台湾',
    'Cross-strait terrain study': '两岸地形研究',
    'Shengsi Archipelago': '嵊泗列岛',
    'Island relief · East China Sea': '海岛地形 · 东海',
    'Leizhou & Hainan': '雷州半岛与海南岛',
    'Topographic study · Qiongzhou Strait': '地形研究 · 琼州海峡',
    'AI-assisted cartography · Blender terrain studies · click a map for full size': 'AI 辅助制图 · Blender 地形研究 · 点击地图查看大图',
    'Motion': '动态影像',
    'Urban growth studies': '城市扩张研究',
    'Seven short demos from the city building-age series, kept together as one moving layer of the archive.': '城市建筑年代系列中的七段短片，合在一起作为档案中的动态部分。',
    'Watch city timelines ↗': '观看城市时间线 ↗',
    'Built-space timelines / 10 cities': '建成空间时间线 / 10 座城市',
    'Selected image set from the City Data Visual repository': '图片选自 City Data Visual 代码库',
    'Sources & attribution ↗': '来源与署名 ↗',

    // Photography and footer
    'Eleven city archives. Click a city to open its wall.': '十一座城市的照片档案。点击城市即可打开照片墙。',
    'Get in touch ↗': '联系我 ↗',

    // Video modal
    'Close': '关闭',
    'Cultural geography': '文化地理',
    'A moving version of the dialect relief study.': '方言地形研究的动态版本。',
    'Regional geography': '区域地理',
    'Yangtze basin / four studies': '长江流域 / 四项研究',
    'A moving sequence across terrain, hydrology, population, and the basin’s urban corridor.': '依次呈现地形、水文、人口与流域城市走廊的动态序列。',
    'Urban growth': '城市扩张',
    'Building-age timelines': '建筑年代时间线',
    'Seven city demos from the urban expansion series.': '城市扩张系列中的七座城市短片。',
    'Nanjing / 01': '南京 / 01',
    'Nanjing / 02': '南京 / 02',
    'Five country series, 1950–2023': '五国系列，1950–2023',
    'Five annual life-expectancy animations presented side by side.': '五段逐年预期寿命动画，并排呈现。',
    'Cultural geography · film': '文化地理 · 影片',
    'Eighty-two Tang poets’ recorded journeys, 617–907, drawn as light on 3D terrain: the gathering at Chang’an, the reach to the frontiers, the An Lushan rebellion scattering everyone south, the exiles, and the dynasty’s end. Data: Souyun’s chronological map of Tang–Song literature; terrain from AWS Terrain Tiles and Natural Earth; original synthesized score. 4 min · web edition; the 1920 × 1080 / 60 fps master is on': '八十二位唐代诗人有记录的行迹（617–907），化作三维地形上的光：长安的群贤汇聚，远赴边塞，安史之乱后众人南下流散，贬谪远方，直至王朝终结。数据：搜韵唐宋文学编年地图；地形来自 AWS Terrain Tiles 与 Natural Earth；原创合成配乐。4 分钟 · 网页版；1920 × 1080 / 60 fps 母版见',
    '.': '。',
    'From the fall of the Tang to the last battle of the Song, 907–1279: 280 poets’ recorded journeys as lights across the land. The fall of Kaifeng in 1127, the court’s flight south to Lin’an that Li Qingzhao followed by sea, a century of gazing north across the Huai, and Yashan. Data: Souyun’s chronological map of Tang–Song literature; historical overlays are schematic; ink paintings are AI-generated; original synthesized score. 5 min 34 s · web edition; the 1920 × 1080 / 60 fps master is on': '从唐亡到宋末最后一战（907–1279）：280 位诗人有记录的行迹，化作大地上的点点灯火。1127 年开封陷落，朝廷南渡临安，李清照由海路追随；此后一个世纪隔淮北望，终至崖山。数据：搜韵唐宋文学编年地图；历史图层为示意；水墨画由 AI 生成；原创合成配乐。5 分 34 秒 · 网页版；1920 × 1080 / 60 fps 母版见',
    'Coastal geography': '海岸地理',
    'A moving portrait of lighthouses and navigation lights around Taiwan, Penghu, and nearby islands. Published light cycles, stylized beams. 30 s · 1080 × 1920.': '台湾、澎湖及周边岛屿灯塔与航标的动态画像。灯质周期依据公开资料，光束为风格化处理。30 秒 · 1080 × 1920。',
    'Weather & climate': '天气与气候',
    'A summer of satellite-detected optical lightning events across China, June to August 2023. FY-4A LMI observations, 8 km grid. 20 s · 1080 × 1920.': '2023 年 6 月至 8 月，卫星观测到的中国光学闪电事件，一整个夏天。风云四号 A 星 LMI 观测，8 公里网格。20 秒 · 1080 × 1920。',
    'Astronomy & tides': '天文与潮汐',
    'From the summer solstice to the Mid-Autumn full moon: the moon’s phase over Hong Kong, the solar terms, and a rolling 24-hour tide at Quarry Bay. HKO tide predictions and lunar calendar; moon rendering from Star Walk. 2 min 41 s · 1080 × 1920.': '从夏至到中秋满月：香港上空的月相、二十四节气，以及鲗鱼涌滚动的 24 小时潮汐。潮汐预报与农历来自香港天文台；月球渲染来自 Star Walk。2 分 41 秒 · 1080 × 1920。',
  };

  const ROOTS = 'main, .site-footer, #video-modal';
  // Photo cards share city names with the wall, which script.js titles in English, so they stay as they are.
  const SKIP = '.photography-grid, .photography-more, .tags';
  const STORAGE_KEY = 'felix-lang';
  const root = document.documentElement;
  const toggle = document.querySelector('.lang-toggle');
  const originals = new Map();
  let nodes = null;

  const collect = () => {
    nodes = [];
    document.querySelectorAll(ROOTS).forEach((container) => {
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const text = node.nodeValue.trim();
        if (text && Object.hasOwn(ZH, text) && !node.parentElement.closest(SKIP)) nodes.push(node);
      }
    });
  };

  const setLang = (lang) => {
    const zh = lang === 'zh';
    if (zh && !nodes) collect();
    (nodes || []).forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const text = original.trim();
      // Keep the surrounding whitespace so inline spacing around links and icons is unchanged.
      node.nodeValue = zh ? original.replace(text, ZH[text]) : original;
    });
    root.lang = zh ? 'zh-Hans' : 'en';
    if (toggle) {
      toggle.dataset.active = zh ? 'zh' : 'en';
      toggle.setAttribute('aria-label', zh ? 'Switch to English' : '切换到简体中文');
    }
  };

  let saved = null;
  try { saved = window.localStorage.getItem(STORAGE_KEY); } catch { /* storage blocked */ }
  setLang(saved === 'zh' ? 'zh' : 'en');

  toggle?.addEventListener('click', () => {
    const next = root.lang === 'zh-Hans' ? 'en' : 'zh';
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* storage blocked */ }
    setLang(next);
  });
})();
