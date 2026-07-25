"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Language = "zh" | "en" | "ko" | "ja";

const productImages = [
  "/images/liquid-metal/product-en590.png",
  "/images/liquid-metal/product-crude.png",
  "/images/liquid-metal/product-lng.png",
];

const languages: { code: Language; label: string; short: string }[] = [
  { code: "zh", label: "中文", short: "中" },
  { code: "en", label: "English", short: "EN" },
  { code: "ko", label: "한국어", short: "한" },
  { code: "ja", label: "日本語", short: "日" },
];

const copy = {
  zh: {
    htmlLang: "zh-CN",
    companyName: "海南金丰石油化工有限公司",
    companyNameShort: "海南金丰石化",
    descriptor: "国际能源与石化产品供应链服务",
    languageLabel: "选择语言",
    menuLabel: "打开导航",
    closeLabel: "关闭导航",
    nav: ["公司概况", "核心产品", "交付能力", "资质合规", "联系我们"],
    heroEyebrow: "ENERGY · TRADE · DELIVERY",
    heroTitle: "海南金丰，汇聚实力，共赢未来。",
    heroBody:
      "面向国际买家、工业客户与长期合作伙伴，提供 EN590 柴油、原油及 LNG 的资源协调、贸易执行与交付支持。",
    heroPrimary: "提交采购需求",
    heroSecondary: "查看核心产品",
    heroProducts: ["EN590 柴油", "原油", "LNG"],
    heroNote: "支持 CIF · FOB · DES 商务安排",
    stats: [
      { value: "2021", label: "成立于海南" },
      { value: "9.1 亿元", label: "注册资本" },
      { value: "3", label: "核心能源品类" },
      { value: "4", label: "重点资源区域" },
    ],
    aboutEyebrow: "ABOUT JINFENG",
    aboutTitle: "以规范执行，提升大宗能源贸易的确定性",
    aboutBody:
      "海南金丰石化坐落于三亚崖州湾科技城，定位为国际能源与石化贸易供应链服务商。我们联动多区域油气资源，以清晰的商务流程、第三方检验和物流协同，服务全球采购与工业用能需求。",
    aboutPoints: [
      "资源端：协同北美、中亚、东南亚及里海区域供应资源",
      "执行端：配合合同、单证、检验、装卸港与结算流程",
      "交付端：支持海运、储运衔接及多式联运协调",
    ],
    aboutCaption: "从资源对接到目的港交付，围绕每一票货物组织执行。",
    productsEyebrow: "CORE PRODUCTS",
    productsTitle: "三项核心供应产品",
    productsIntro:
      "规格、数量、装港与交付周期将根据实时资源和正式合同确认。",
    products: [
      {
        index: "01",
        name: "EN590 柴油",
        english: "EN590 DIESEL",
        summary: "适用于运输、工程机械与柴油发电等场景。",
        specs: ["10 ppm / 50 ppm 可询", "批量现货与长期计划", "CIF / FOB / DES"],
        cta: "询问 EN590",
      },
      {
        index: "02",
        name: "原油",
        english: "CRUDE OIL",
        summary: "为炼厂原料与长期采购提供资源协调和交付支持。",
        specs: ["轻质低硫 / 中质含硫", "CIF / FOB", "第三方 Q&Q 检验"],
        cta: "询问原油",
      },
      {
        index: "03",
        name: "液化天然气",
        english: "LNG",
        summary: "服务发电、工业与城市燃气等液化天然气采购需求。",
        specs: ["国际标准 LNG", "CIF 交付支持", "船期与接卸协同"],
        cta: "询问 LNG",
      },
    ],
    otherProducts: "亦可就航空煤油、汽油、沥青及硫磺等产品进行项目沟通。",
    networkEyebrow: "GLOBAL SUPPLY NETWORK",
    networkTitle: "多区域协同，构建灵活供应组合",
    networkBody:
      "以海南与新加坡为亚太响应节点，联动中亚、里海及北美资源，根据产品、装港、数量与交付窗口组织可执行方案。",
    regions: [
      {
        code: "KZ",
        name: "哈萨克斯坦",
        detail: "原油与 EN590 资源协调",
      },
      {
        code: "AZ",
        name: "阿塞拜疆",
        detail: "Azeri Light 等原油渠道",
      },
      {
        code: "SG",
        name: "新加坡",
        detail: "亚太成品油调配与周转",
      },
      {
        code: "US",
        name: "美国",
        detail: "轻质低硫原油与 LNG 补充来源",
      },
    ],
    deliveryEyebrow: "SUPPLY CHAIN & DELIVERY",
    deliveryTitle: "从询盘到交付，关键环节均有明确责任",
    deliveryItems: [
      {
        number: "01",
        title: "资源协调",
        text: "根据品类、规格、数量与交期匹配多区域资源。",
      },
      {
        number: "02",
        title: "物流组织",
        text: "协调海运、储运衔接、装卸港与多式联运安排。",
      },
      {
        number: "03",
        title: "交付模式",
        text: "支持 CIF、FOB、DES 等国际贸易商务安排。",
      },
      {
        number: "04",
        title: "第三方检验",
        text: "可由 SGS、BV、CCIC 等机构执行质量与数量检验。",
      },
      {
        number: "05",
        title: "结算配合",
        text: "以信用证为主，其他结构依项目与合规审查协商。",
      },
      {
        number: "06",
        title: "响应支持",
        text: "新加坡及海南洋浦等节点可提供项目响应支持。",
      },
    ],
    complianceEyebrow: "QUALIFICATIONS & COMPLIANCE",
    complianceTitle: "把合规与风险控制置于交易执行之前",
    complianceBody:
      "以有效资质、完整单证、合规审查和可验证的检验流程支持项目推进。",
    complianceItems: [
      {
        title: "经营资质",
        text: "营业执照与正常经营状态",
      },
      {
        title: "许可备案",
        text: "危险化学品经营许可及进出口备案",
      },
      {
        title: "流程控制",
        text: "合同、单证、第三方检验与信用管理",
      },
    ],
    processEyebrow: "HOW WE WORK",
    processTitle: "四步建立可执行的合作路径",
    process: [
      {
        number: "01",
        title: "需求确认",
        text: "明确产品规格、数量、目的港、交付窗口及服务需求。",
      },
      {
        number: "02",
        title: "条款沟通",
        text: "沟通价格基准、贸易条款、物流与结算结构。",
      },
      {
        number: "03",
        title: "合同协同",
        text: "按需签署保密协议，并推进 SPA / 合同审核与签署。",
      },
      {
        number: "04",
        title: "执行交付",
        text: "安排装运、检验、物流跟踪、交付与长期供货复盘。",
      },
    ],
    contactEyebrow: "CONTACT & ENQUIRY",
    contactTitle: "把您的采购条件发给我们",
    contactBody:
      "建议提供产品、数量、目的港与目标交付时间。团队将据此确认资源匹配与下一步商务安排。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    addressLabel: "地址",
    address: "海南省三亚市崖州区崖州湾科技城兴滨路二巷3号6-2-23",
    form: {
      product: "产品",
      productPlaceholder: "请选择产品",
      volume: "预计数量",
      volumePlaceholder: "例如：50,000 MT",
      destination: "目的港 / 交付地",
      destinationPlaceholder: "例如：Busan, Korea",
      contact: "您的邮箱",
      contactPlaceholder: "name@company.com",
      note: "补充说明",
      notePlaceholder: "规格、贸易条款、时间窗口等",
      submit: "准备询盘邮件",
      hint: "点击后将调用您的邮件应用，邮件发送前仍可编辑。",
    },
    footerDescriptor: "国际能源与石化产品供应链服务商",
    legal:
      "所有产品供应、规格、价格与交付条款均以最终 SPA / 正式合同及合规审查结果为准。",
    copyright: "海南金丰石油化工有限公司。保留所有权利。",
  },
  en: {
    htmlLang: "en",
    companyName: "Hainan Jinfeng Petrochemical Co., Ltd.",
    companyNameShort: "Jinfeng Petrochemical",
    descriptor: "International Energy & Petrochemical Supply Chain Services",
    languageLabel: "Select language",
    menuLabel: "Open navigation",
    closeLabel: "Close navigation",
    nav: ["Overview", "Products", "Delivery", "Compliance", "Contact"],
    heroEyebrow: "ENERGY · TRADE · DELIVERY",
    heroTitle: "Hainan Jinfeng. United in strength, creating the future together.",
    heroBody:
      "Resource coordination, trade execution and delivery support for EN590 diesel, crude oil and LNG — serving international buyers, industrial customers and long-term partners.",
    heroPrimary: "Start an enquiry",
    heroSecondary: "Explore products",
    heroProducts: ["EN590 Diesel", "Crude Oil", "LNG"],
    heroNote: "CIF · FOB · DES commercial arrangements",
    stats: [
      { value: "2021", label: "Founded in Hainan" },
      { value: "RMB 910M", label: "Registered capital" },
      { value: "3", label: "Core energy products" },
      { value: "4", label: "Priority supply regions" },
    ],
    aboutEyebrow: "ABOUT JINFENG",
    aboutTitle: "Disciplined execution for greater certainty in physical energy trade.",
    aboutBody:
      "Based in Sanya Yazhou Bay Science and Technology City, Hainan Jinfeng is positioned as an international energy and petrochemical supply-chain service provider. We coordinate multi-region resources and support global procurement through clear commercial processes, third-party inspection and logistics alignment.",
    aboutPoints: [
      "Resources: coordination across North America, Central Asia, Southeast Asia and the Caspian region",
      "Execution: support for contracts, documentation, inspection, port operations and settlement",
      "Delivery: marine transport, storage interfaces and multimodal logistics coordination",
    ],
    aboutCaption:
      "One coordinated execution path, from resource matching to destination delivery.",
    productsEyebrow: "CORE PRODUCTS",
    productsTitle: "Three products at the center of our supply offering.",
    productsIntro:
      "Specifications, volume, loading port and delivery window are confirmed against live availability and the final contract.",
    products: [
      {
        index: "01",
        name: "EN590 Diesel",
        english: "EN590 DIESEL",
        summary:
          "For transportation, engineering machinery and diesel power generation.",
        specs: ["10 ppm / 50 ppm enquiries", "Spot and term programmes", "CIF / FOB / DES"],
        cta: "Enquire about EN590",
      },
      {
        index: "02",
        name: "Crude Oil",
        english: "CRUDE OIL",
        summary:
          "Resource and delivery coordination for refinery feedstock and term procurement.",
        specs: ["Light sweet / medium sour", "CIF / FOB", "Third-party Q&Q inspection"],
        cta: "Enquire about crude",
      },
      {
        index: "03",
        name: "Liquefied Natural Gas",
        english: "LNG",
        summary:
          "LNG supply support for power generation, industrial and city-gas demand.",
        specs: ["International-standard LNG", "CIF delivery support", "Vessel and terminal alignment"],
        cta: "Enquire about LNG",
      },
    ],
    otherProducts:
      "Project discussions are also available for jet fuel, gasoline, bitumen and sulfur.",
    networkEyebrow: "GLOBAL SUPPLY NETWORK",
    networkTitle: "Multi-region coordination for a more flexible supply mix.",
    networkBody:
      "Using Hainan and Singapore as Asia-Pacific response points, we coordinate resources across Central Asia, the Caspian region and North America to shape executable options around product, loading, volume and delivery window.",
    regions: [
      { code: "KZ", name: "Kazakhstan", detail: "Crude oil and EN590 coordination" },
      { code: "AZ", name: "Azerbaijan", detail: "Azeri Light and related crude channels" },
      { code: "SG", name: "Singapore", detail: "Asia-Pacific product blending and transit" },
      { code: "US", name: "United States", detail: "Supplementary light crude and LNG sources" },
    ],
    deliveryEyebrow: "SUPPLY CHAIN & DELIVERY",
    deliveryTitle: "Clear accountability across the route from enquiry to delivery.",
    deliveryItems: [
      {
        number: "01",
        title: "Resource matching",
        text: "Aligning product, specification, volume and timing with multi-region supply.",
      },
      {
        number: "02",
        title: "Logistics planning",
        text: "Marine transport, storage interfaces, port operations and multimodal coordination.",
      },
      {
        number: "03",
        title: "Delivery structures",
        text: "CIF, FOB and DES commercial arrangements for international trade.",
      },
      {
        number: "04",
        title: "Third-party inspection",
        text: "Quality and quantity inspection can be performed by SGS, BV, CCIC and peers.",
      },
      {
        number: "05",
        title: "Settlement support",
        text: "Letters of credit are preferred; other structures depend on the project and review.",
      },
      {
        number: "06",
        title: "Regional response",
        text: "Singapore and Hainan Yangpu can support project coordination.",
      },
    ],
    complianceEyebrow: "QUALIFICATIONS & COMPLIANCE",
    complianceTitle: "Compliance and risk control come before transaction execution.",
    complianceBody:
      "Valid qualifications, complete documentation, compliance review and verifiable inspection support every engagement.",
    complianceItems: [
      { title: "Business standing", text: "Active business licence and operating status" },
      { title: "Permits & filings", text: "Hazardous chemicals permit and import/export filing" },
      { title: "Process control", text: "Contracts, documents, inspection and credit management" },
    ],
    processEyebrow: "HOW WE WORK",
    processTitle: "Four steps to an executable cooperation path.",
    process: [
      {
        number: "01",
        title: "Define the requirement",
        text: "Confirm specification, volume, destination, delivery window and service needs.",
      },
      {
        number: "02",
        title: "Align commercial terms",
        text: "Discuss pricing basis, Incoterms, logistics and settlement structure.",
      },
      {
        number: "03",
        title: "Coordinate contracts",
        text: "Execute an NDA if needed, then review and sign the SPA or formal contract.",
      },
      {
        number: "04",
        title: "Execute & deliver",
        text: "Coordinate loading, inspection, tracking, delivery and term-supply review.",
      },
    ],
    contactEyebrow: "CONTACT & ENQUIRY",
    contactTitle: "Send us the fundamentals of your requirement.",
    contactBody:
      "Share the product, volume, destination and target delivery window. Our team will use them to assess matching resources and the next commercial step.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    address:
      "6-2-23, No. 3, Lane 2, Xingbin Road, Yazhou Bay Science and Technology City, Yazhou District, Sanya, Hainan, China",
    form: {
      product: "Product",
      productPlaceholder: "Select a product",
      volume: "Indicative volume",
      volumePlaceholder: "e.g. 50,000 MT",
      destination: "Destination port / place",
      destinationPlaceholder: "e.g. Busan, Korea",
      contact: "Your email",
      contactPlaceholder: "name@company.com",
      note: "Additional details",
      notePlaceholder: "Specification, Incoterms, target window, etc.",
      submit: "Prepare enquiry email",
      hint: "This opens your email app. You can review everything before sending.",
    },
    footerDescriptor: "International energy & petrochemical supply-chain services",
    legal:
      "All availability, specifications, pricing and delivery terms are subject to the final SPA or formal contract and compliance review.",
    copyright: "Hainan Jinfeng Petrochemical Co., Ltd. All rights reserved.",
  },
  ko: {
    htmlLang: "ko",
    companyName: "하이난 진펑 석유화공 유한회사",
    companyNameShort: "하이난 진펑 석유화공",
    descriptor: "국제 에너지·석유화학 공급망 서비스",
    languageLabel: "언어 선택",
    menuLabel: "내비게이션 열기",
    closeLabel: "내비게이션 닫기",
    nav: ["회사 소개", "핵심 제품", "공급·인도", "자격·준법", "문의"],
    heroEyebrow: "ENERGY · TRADE · DELIVERY",
    heroTitle: "하이난 진펑, 역량을 모아 함께 미래를 엽니다.",
    heroBody:
      "국제 바이어, 산업 고객 및 장기 파트너를 위해 EN590 디젤, 원유, LNG의 자원 조정, 무역 실행 및 인도 지원을 제공합니다.",
    heroPrimary: "구매 문의 시작",
    heroSecondary: "핵심 제품 보기",
    heroProducts: ["EN590 디젤", "원유", "LNG"],
    heroNote: "CIF · FOB · DES 거래 조건 지원",
    stats: [
      { value: "2021", label: "하이난 설립" },
      { value: "9.1억 위안", label: "등록자본" },
      { value: "3", label: "핵심 에너지 품목" },
      { value: "4", label: "중점 자원 지역" },
    ],
    aboutEyebrow: "ABOUT JINFENG",
    aboutTitle: "규범적인 실행으로 실물 에너지 거래의 확실성을 높입니다.",
    aboutBody:
      "싼야 야저우만 과학기술도시에 위치한 하이난 진펑은 국제 에너지 및 석유화학 공급망 서비스 기업입니다. 다지역 자원 연계, 명확한 상무 절차, 제3자 검사 및 물류 조정을 통해 글로벌 조달을 지원합니다.",
    aboutPoints: [
      "자원: 북미·중앙아시아·동남아시아·카스피해 지역 공급 연계",
      "실행: 계약, 서류, 검사, 선적·양하 및 결제 절차 지원",
      "인도: 해상운송, 저장 연계 및 복합운송 조정",
    ],
    aboutCaption: "자원 매칭부터 목적지 인도까지 하나의 실행 경로로 조정합니다.",
    productsEyebrow: "CORE PRODUCTS",
    productsTitle: "공급의 중심이 되는 세 가지 핵심 제품",
    productsIntro:
      "규격, 물량, 선적항 및 인도 일정은 실시간 가용 자원과 최종 계약에 따라 확정됩니다.",
    products: [
      {
        index: "01",
        name: "EN590 디젤",
        english: "EN590 DIESEL",
        summary: "운송, 건설기계 및 디젤 발전 용도에 적합합니다.",
        specs: ["10 ppm / 50 ppm 문의", "현물 및 장기 프로그램", "CIF / FOB / DES"],
        cta: "EN590 문의",
      },
      {
        index: "02",
        name: "원유",
        english: "CRUDE OIL",
        summary: "정유 원료 및 장기 구매를 위한 자원·인도 조정을 지원합니다.",
        specs: ["경질 저유황 / 중질 유황", "CIF / FOB", "제3자 Q&Q 검사"],
        cta: "원유 문의",
      },
      {
        index: "03",
        name: "액화천연가스",
        english: "LNG",
        summary: "발전, 산업 및 도시가스 수요를 위한 LNG 조달을 지원합니다.",
        specs: ["국제표준 LNG", "CIF 인도 지원", "선박 일정·터미널 조정"],
        cta: "LNG 문의",
      },
    ],
    otherProducts:
      "항공유, 휘발유, 역청 및 유황 프로젝트도 별도 협의할 수 있습니다.",
    networkEyebrow: "GLOBAL SUPPLY NETWORK",
    networkTitle: "다지역 협업으로 유연한 공급 조합을 구축합니다.",
    networkBody:
      "하이난과 싱가포르를 아시아태평양 대응 거점으로 삼아 중앙아시아, 카스피해 및 북미 자원을 연계하고 제품, 선적, 물량과 일정에 맞춘 실행안을 구성합니다.",
    regions: [
      { code: "KZ", name: "카자흐스탄", detail: "원유 및 EN590 자원 조정" },
      { code: "AZ", name: "아제르바이잔", detail: "Azeri Light 등 원유 채널" },
      { code: "SG", name: "싱가포르", detail: "아시아태평양 제품 조정·환적" },
      { code: "US", name: "미국", detail: "경질 저유황 원유·LNG 보완 자원" },
    ],
    deliveryEyebrow: "SUPPLY CHAIN & DELIVERY",
    deliveryTitle: "문의부터 인도까지 주요 단계의 책임을 명확히 합니다.",
    deliveryItems: [
      { number: "01", title: "자원 매칭", text: "품목, 규격, 물량, 일정에 맞춰 다지역 공급을 연계합니다." },
      { number: "02", title: "물류 조직", text: "해상운송, 저장, 항만 작업 및 복합운송을 조정합니다." },
      { number: "03", title: "인도 조건", text: "CIF, FOB, DES 등 국제무역 조건을 지원합니다." },
      { number: "04", title: "제3자 검사", text: "SGS, BV, CCIC 등을 통한 품질·수량 검사를 지원합니다." },
      { number: "05", title: "결제 협력", text: "신용장을 우선하며 기타 구조는 프로젝트 심사 후 협의합니다." },
      { number: "06", title: "지역 대응", text: "싱가포르와 하이난 양푸 거점에서 프로젝트 대응을 지원합니다." },
    ],
    complianceEyebrow: "QUALIFICATIONS & COMPLIANCE",
    complianceTitle: "거래 실행에 앞서 준법과 리스크 관리를 우선합니다.",
    complianceBody:
      "유효한 자격, 완전한 서류, 준법 심사 및 검증 가능한 검사 절차로 프로젝트를 지원합니다.",
    complianceItems: [
      { title: "사업 자격", text: "유효한 영업허가와 정상 영업 상태" },
      { title: "허가·신고", text: "위험화학품 경영허가 및 수출입 신고" },
      { title: "절차 통제", text: "계약, 서류, 제3자 검사 및 신용 관리" },
    ],
    processEyebrow: "HOW WE WORK",
    processTitle: "실행 가능한 협력을 만드는 네 단계",
    process: [
      { number: "01", title: "요구 확인", text: "규격, 물량, 목적지, 인도 일정과 서비스 요구를 확인합니다." },
      { number: "02", title: "조건 협의", text: "가격 기준, 거래 조건, 물류와 결제 구조를 협의합니다." },
      { number: "03", title: "계약 조정", text: "필요 시 NDA 체결 후 SPA 또는 정식 계약을 검토·체결합니다." },
      { number: "04", title: "실행·인도", text: "선적, 검사, 추적, 인도와 장기공급 검토를 진행합니다." },
    ],
    contactEyebrow: "CONTACT & ENQUIRY",
    contactTitle: "구매 조건을 알려주십시오.",
    contactBody:
      "제품, 물량, 목적지 및 목표 인도 시기를 보내주시면 자원 매칭과 다음 상무 절차를 검토하겠습니다.",
    phoneLabel: "전화",
    emailLabel: "이메일",
    addressLabel: "주소",
    address: "중국 하이난성 싼야시 야저우구 야저우만 과학기술도시 싱빈로 2항 3호 6-2-23",
    form: {
      product: "제품",
      productPlaceholder: "제품을 선택하세요",
      volume: "예상 물량",
      volumePlaceholder: "예: 50,000 MT",
      destination: "목적항 / 인도지",
      destinationPlaceholder: "예: Busan, Korea",
      contact: "이메일",
      contactPlaceholder: "name@company.com",
      note: "추가 내용",
      notePlaceholder: "규격, 거래 조건, 목표 일정 등",
      submit: "문의 이메일 준비",
      hint: "이메일 앱이 열리며 발송 전 내용을 검토할 수 있습니다.",
    },
    footerDescriptor: "국제 에너지·석유화학 공급망 서비스",
    legal:
      "모든 공급 가능 여부, 규격, 가격 및 인도 조건은 최종 SPA 또는 정식 계약과 준법 심사에 따릅니다.",
    copyright: "하이난 진펑 석유화공 유한회사. All rights reserved.",
  },
  ja: {
    htmlLang: "ja",
    companyName: "海南金豊石油化工有限公司",
    companyNameShort: "海南金豊石油化工",
    descriptor: "国際エネルギー・石油化学サプライチェーンサービス",
    languageLabel: "言語を選択",
    menuLabel: "ナビゲーションを開く",
    closeLabel: "ナビゲーションを閉じる",
    nav: ["会社概要", "主要製品", "供給・納入", "資格・コンプライアンス", "お問い合わせ"],
    heroEyebrow: "ENERGY · TRADE · DELIVERY",
    heroTitle: "海南金豊、力を結集し、共に未来を拓く。",
    heroBody:
      "海外バイヤー、産業顧客、長期パートナーに向け、EN590軽油、原油、LNGの資源調整、貿易実行、納入支援を提供します。",
    heroPrimary: "調達条件を送る",
    heroSecondary: "主要製品を見る",
    heroProducts: ["EN590 軽油", "原油", "LNG"],
    heroNote: "CIF · FOB · DES の商務条件に対応",
    stats: [
      { value: "2021", label: "海南省で設立" },
      { value: "9.1億元", label: "登録資本金" },
      { value: "3", label: "主要エネルギー品目" },
      { value: "4", label: "重点調達地域" },
    ],
    aboutEyebrow: "ABOUT JINFENG",
    aboutTitle: "規律ある実行で、現物エネルギー取引の確実性を高めます。",
    aboutBody:
      "三亜市崖州湾科技城に拠点を置く海南金豊は、国際エネルギー・石油化学サプライチェーンサービス企業です。複数地域の資源調整、明確な商務プロセス、第三者検査、物流連携により、国際調達を支援します。",
    aboutPoints: [
      "資源：北米、中央アジア、東南アジア、カスピ海地域の供給を調整",
      "実行：契約、書類、検査、積揚港、決済プロセスを支援",
      "納入：海上輸送、保管接続、複合一貫輸送を調整",
    ],
    aboutCaption: "資源マッチングから仕向地納入まで、一本化した実行経路を構築します。",
    productsEyebrow: "CORE PRODUCTS",
    productsTitle: "供給の中心となる3つの主要製品",
    productsIntro:
      "仕様、数量、積出港、納期は、実際の供給可能状況と最終契約に基づき確定します。",
    products: [
      {
        index: "01",
        name: "EN590 軽油",
        english: "EN590 DIESEL",
        summary: "輸送、建設機械、ディーゼル発電などの用途に対応します。",
        specs: ["10 ppm / 50 ppm ご相談", "スポット・長期プログラム", "CIF / FOB / DES"],
        cta: "EN590 を問い合わせ",
      },
      {
        index: "02",
        name: "原油",
        english: "CRUDE OIL",
        summary: "製油所原料および長期調達の資源・納入調整を支援します。",
        specs: ["軽質低硫黄 / 中質含硫黄", "CIF / FOB", "第三者 Q&Q 検査"],
        cta: "原油を問い合わせ",
      },
      {
        index: "03",
        name: "液化天然ガス",
        english: "LNG",
        summary: "発電、産業、都市ガス向けの LNG 調達を支援します。",
        specs: ["国際標準 LNG", "CIF 納入支援", "船期・受入基地の調整"],
        cta: "LNG を問い合わせ",
      },
    ],
    otherProducts:
      "航空燃料、ガソリン、アスファルト、硫黄についても案件ごとにご相談いただけます。",
    networkEyebrow: "GLOBAL SUPPLY NETWORK",
    networkTitle: "複数地域の連携で、柔軟な供給ポートフォリオを構築。",
    networkBody:
      "海南とシンガポールをアジア太平洋の対応拠点とし、中央アジア、カスピ海、北米の資源を連携。製品、積出港、数量、納期に合わせた実行案を組成します。",
    regions: [
      { code: "KZ", name: "カザフスタン", detail: "原油・EN590 の資源調整" },
      { code: "AZ", name: "アゼルバイジャン", detail: "Azeri Light 等の原油チャネル" },
      { code: "SG", name: "シンガポール", detail: "アジア太平洋の製品調整・中継" },
      { code: "US", name: "米国", detail: "軽質低硫黄原油・LNG の補完供給" },
    ],
    deliveryEyebrow: "SUPPLY CHAIN & DELIVERY",
    deliveryTitle: "お問い合わせから納入まで、各工程の責任を明確に。",
    deliveryItems: [
      { number: "01", title: "資源マッチング", text: "品目、仕様、数量、納期に合わせて複数地域の供給を調整します。" },
      { number: "02", title: "物流組成", text: "海上輸送、保管、港湾作業、複合一貫輸送を調整します。" },
      { number: "03", title: "納入条件", text: "CIF、FOB、DES 等の国際貿易条件に対応します。" },
      { number: "04", title: "第三者検査", text: "SGS、BV、CCIC 等による品質・数量検査を支援します。" },
      { number: "05", title: "決済支援", text: "信用状を基本とし、その他は案件審査後に協議します。" },
      { number: "06", title: "地域対応", text: "シンガポールおよび海南洋浦等の拠点が案件対応を支援します。" },
    ],
    complianceEyebrow: "QUALIFICATIONS & COMPLIANCE",
    complianceTitle: "取引実行に先立ち、コンプライアンスとリスク管理を重視。",
    complianceBody:
      "有効な資格、完全な書類、コンプライアンス審査、検証可能な検査手続きで案件を支援します。",
    complianceItems: [
      { title: "事業資格", text: "有効な営業許可と正常な経営状態" },
      { title: "許認可・届出", text: "危険化学品取扱許可および輸出入届出" },
      { title: "プロセス管理", text: "契約、書類、第三者検査、信用管理" },
    ],
    processEyebrow: "HOW WE WORK",
    processTitle: "実行可能な協業をつくる4つのステップ",
    process: [
      { number: "01", title: "要件確認", text: "仕様、数量、仕向地、納入時期、サービス要件を確認します。" },
      { number: "02", title: "条件調整", text: "価格基準、貿易条件、物流、決済スキームを協議します。" },
      { number: "03", title: "契約連携", text: "必要に応じ NDA を締結し、SPA または正式契約を審査・締結します。" },
      { number: "04", title: "実行・納入", text: "船積み、検査、追跡、納入、長期供給のレビューを行います。" },
    ],
    contactEyebrow: "CONTACT & ENQUIRY",
    contactTitle: "調達条件をお知らせください。",
    contactBody:
      "製品、数量、仕向地、目標納期をご共有ください。該当資源と次の商務ステップを確認します。",
    phoneLabel: "電話",
    emailLabel: "メール",
    addressLabel: "住所",
    address: "中国海南省三亜市崖州区崖州湾科技城 興浜路二巷3号 6-2-23",
    form: {
      product: "製品",
      productPlaceholder: "製品を選択",
      volume: "予定数量",
      volumePlaceholder: "例：50,000 MT",
      destination: "仕向港 / 納入地",
      destinationPlaceholder: "例：Busan, Korea",
      contact: "メールアドレス",
      contactPlaceholder: "name@company.com",
      note: "補足",
      notePlaceholder: "仕様、貿易条件、希望時期など",
      submit: "問い合わせメールを作成",
      hint: "メールアプリが開きます。送信前に内容を確認・編集できます。",
    },
    footerDescriptor: "国際エネルギー・石油化学サプライチェーンサービス",
    legal:
      "すべての供給可否、仕様、価格、納入条件は、最終 SPA または正式契約およびコンプライアンス審査に従います。",
    copyright: "海南金豊石油化工有限公司。All rights reserved.",
  },
} as const;

const aboutPreview = {
  zh: {
    title: "扎根海南，面向更广阔的未来",
    body: "以务实为根基，以专业为标准，持续整合能源供给服务能力、产业资源与服务经验。",
    cta: "了解海南金丰",
  },
  en: {
    title: "Rooted in Hainan. Built for a wider future.",
    body: "Grounded in pragmatism and measured by professionalism, we bring together energy-supply capabilities, industry resources and service experience.",
    cta: "Discover Hainan Jinfeng",
  },
  ko: {
    title: "하이난에 뿌리를 두고 더 넓은 미래로",
    body: "실용성을 기반으로 전문성을 기준 삼아 에너지 공급 역량, 산업 자원과 서비스 경험을 통합합니다.",
    cta: "하이난 진펑 알아보기",
  },
  ja: {
    title: "海南に根ざし、より広い未来へ",
    body: "実務を基盤に、専門性を基準として、エネルギー供給力・産業資源・サービス経験を結びます。",
    cta: "海南金豊について",
  },
} as const;

function setInitialLanguage(): Language {
  if (typeof window === "undefined") return "zh";
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (urlLanguage && languages.some(({ code }) => code === urlLanguage)) {
    return urlLanguage as Language;
  }
  const savedLanguage = window.localStorage.getItem("jinfeng-language");
  if (savedLanguage && languages.some(({ code }) => code === savedLanguage)) {
    return savedLanguage as Language;
  }
  return "zh";
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const about = aboutPreview[language];
  const navTargets = ["about", "products", "delivery", "compliance", "contact"];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLanguage(setInitialLanguage());
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    window.localStorage.setItem("jinfeng-language", language);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language, t.htmlLang]);

  const productOptions = useMemo(
    () => t.products.map((product) => product.name),
    [t.products],
  );

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  };

  const scrollToEnquiry = (product?: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      const select = document.getElementById("product") as HTMLSelectElement | null;
      if (select && product) select.value = product;
    }, 450);
  };

  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const product = String(data.get("product") || "");
    const volume = String(data.get("volume") || "");
    const destination = String(data.get("destination") || "");
    const contact = String(data.get("contact") || "");
    const note = String(data.get("note") || "");
    const subject = `Energy enquiry — ${product || "General"}`;
    const body = [
      `Product: ${product}`,
      `Indicative volume: ${volume}`,
      `Destination: ${destination}`,
      `Buyer contact: ${contact}`,
      "",
      "Additional details:",
      note,
    ].join("\n");
    window.location.href = `mailto:zhongjie@hnijfsy.cn?cc=liray@hnjfsy.cn&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label={t.companyName}>
            <img
              className="brand-logo"
              src="/images/jinfeng-logo.jpg"
              alt=""
              width="48"
              height="52"
            />
            <span className="brand-copy">
              <strong>{t.companyNameShort}</strong>
              <small>HAINAN JINFENG PETROCHEMICAL</small>
            </span>
          </a>

          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            {t.nav.map((item, index) => (
              <a
                href={
                  index === 0
                    ? `/about?lang=${language}`
                    : `#${navTargets[index]}`
                }
                key={navTargets[index]}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="mobile-language-row" aria-label={t.languageLabel}>
              {languages.map((item) => (
                <button
                  className={language === item.code ? "is-active" : ""}
                  key={item.code}
                  onClick={() => selectLanguage(item.code)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="header-actions">
            <label className="language-picker">
              <span className="sr-only">{t.languageLabel}</span>
              <select
                aria-label={t.languageLabel}
                value={language}
                onChange={(event) =>
                  selectLanguage(event.target.value as Language)
                }
              >
                {languages.map((item) => (
                  <option value={item.code} key={item.code}>
                    {item.short} · {item.label}
                  </option>
                ))}
              </select>
            </label>
            <a className="header-enquiry" href="#contact">
              {t.heroPrimary}
            </a>
            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.closeLabel : t.menuLabel}
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? t.closeLabel : t.menuLabel}
            </button>
          </div>
        </div>
      </header>

      <section className="lm-hero" id="top">
        <img
          className="lm-hero-art"
          src="/images/liquid-metal/hero-energy-ring.png"
          alt=""
          width="1586"
          height="992"
        />
        <div className="container lm-hero-inner">
          <div className="lm-hero-copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {t.heroPrimary}
              </a>
              <a className="button button-ghost" href="#products">
                {t.heroSecondary}
              </a>
            </div>
            <div className="hero-product-line" aria-label={t.productsTitle}>
              {t.heroProducts.map((product) => (
                <span key={product}>{product}</span>
              ))}
            </div>
          </div>
          <div className="hero-spec">
            <span>GLOBAL ENERGY SUPPLY</span>
            <strong>{t.heroNote}</strong>
          </div>
        </div>
      </section>

      <section className="about-preview" id="about">
        <div className="container about-preview-grid">
          <div>
            <p className="eyebrow dark">{t.aboutEyebrow}</p>
            <h2>{about.title}</h2>
          </div>
          <div className="about-preview-copy">
            <p>{about.body}</p>
            <a className="editorial-link" href={`/about?lang=${language}`}>
              {about.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow dark">{t.productsEyebrow}</p>
            <h2>{t.productsTitle}</h2>
          </div>
          <p>{t.productsIntro}</p>
        </div>

        <div className="product-bands">
          {t.products.map((product, index) => (
            <article className="product-band" key={product.name}>
              <img
                className="product-band-art"
                src={productImages[index]}
                alt=""
                width="2172"
                height="724"
              />
              <div className="container product-band-inner">
                <div className="product-band-copy">
                  <div className="product-kicker">
                    <span>{product.index}</span>
                    <strong>{product.english}</strong>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <ul>
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <button
                    className="editorial-button"
                    onClick={() => scrollToEnquiry(product.name)}
                    type="button"
                  >
                    {product.cta}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="container other-products">{t.otherProducts}</p>
      </section>

      <section className="network-section">
        <img
          className="network-art"
          src="/images/liquid-metal/network-relief.png"
          alt=""
          width="1858"
          height="846"
        />
        <div className="container network-inner">
          <div className="network-copy">
            <p className="eyebrow">{t.networkEyebrow}</p>
            <h2>{t.networkTitle}</h2>
            <p>{t.networkBody}</p>
          </div>
          <div className="region-strip">
            {t.regions.map((region) => (
              <div className="region" key={region.code}>
                <span>{region.code}</span>
                <div>
                  <strong>{region.name}</strong>
                  <p>{region.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="delivery-section" id="delivery">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow dark">{t.deliveryEyebrow}</p>
            <h2>{t.deliveryTitle}</h2>
          </div>
        </div>
        <figure className="delivery-visual">
          <img
            src="/images/liquid-metal/delivery-journey.png"
            alt=""
            width="2172"
            height="724"
          />
        </figure>
        <div className="container delivery-track">
          {t.deliveryItems.map((item) => (
            <article className="delivery-point" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="compliance-section" id="compliance">
        <div className="container compliance-grid">
          <div>
            <p className="eyebrow">{t.complianceEyebrow}</p>
            <h2>{t.complianceTitle}</h2>
            <p className="compliance-body">{t.complianceBody}</p>
          </div>
          <div className="compliance-list">
            {t.complianceItems.map((item, index) => (
              <div className="compliance-item" key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">{t.processEyebrow}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-track">
            {t.process.map((item) => (
              <article className="process-step" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p className="contact-lead">{t.contactBody}</p>
            <dl className="contact-details">
              <div>
                <dt>{t.phoneLabel}</dt>
                <dd>
                  <a href="tel:+8618927599989">+86 189 2759 9989</a>
                </dd>
              </div>
              <div>
                <dt>{t.emailLabel}</dt>
                <dd>
                  <a href="mailto:zhongjie@hnijfsy.cn">
                    zhongjie@hnijfsy.cn
                  </a>
                  <a href="mailto:liray@hnjfsy.cn">liray@hnjfsy.cn</a>
                </dd>
              </div>
              <div>
                <dt>{t.addressLabel}</dt>
                <dd>{t.address}</dd>
              </div>
            </dl>
          </div>

          <form className="enquiry-form" onSubmit={prepareEmail}>
            <div className="form-row">
              <label>
                <span>{t.form.product}</span>
                <select id="product" name="product" defaultValue="" required>
                  <option value="" disabled>
                    {t.form.productPlaceholder}
                  </option>
                  {productOptions.map((product) => (
                    <option value={product} key={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>{t.form.volume}</span>
                <input
                  name="volume"
                  placeholder={t.form.volumePlaceholder}
                  required
                  type="text"
                />
              </label>
            </div>
            <label>
              <span>{t.form.destination}</span>
              <input
                name="destination"
                placeholder={t.form.destinationPlaceholder}
                required
                type="text"
              />
            </label>
            <label>
              <span>{t.form.contact}</span>
              <input
                name="contact"
                placeholder={t.form.contactPlaceholder}
                required
                type="email"
              />
            </label>
            <label>
              <span>{t.form.note}</span>
              <textarea
                name="note"
                placeholder={t.form.notePlaceholder}
                rows={4}
              />
            </label>
            <button className="button button-primary form-submit" type="submit">
              {t.form.submit}
            </button>
            <p className="form-hint">{t.form.hint}</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img
              src="/images/jinfeng-logo.jpg"
              alt=""
              width="48"
              height="52"
            />
            <div>
              <strong>{t.companyName}</strong>
              <p>{t.footerDescriptor}</p>
            </div>
          </div>
          <p className="footer-legal">{t.legal}</p>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {t.copyright}
          </span>
          <div className="footer-languages">
            {languages.map((item) => (
              <button
                className={language === item.code ? "is-active" : ""}
                key={item.code}
                onClick={() => selectLanguage(item.code)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
