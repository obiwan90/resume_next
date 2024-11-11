'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Briefcase, GraduationCap, Gamepad, Plane, Moon, Sun, Globe, Star, ChevronLeft, ChevronRight, ExternalLink, Mail, Github, Linkedin, Container, Cloud, Code2, Cpu, Rocket, Clock, Trophy, Medal, Users, Lightbulb } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// 添加类型定义
interface Country {
  name: string;
  nameZh: string;
  coordinates: [number, number]; // 明确指定为元组类型
  type: string;
  highlights: string[];
  color: string;
}

interface Project {
  title: string;
  type: string;
  period?: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: string;
  imageSrc?: string;
}

// 首先定义语言类型
type LanguageKey = 'en' | 'zh' | 'ja';

// 定义语言内容的类型
type LanguageContent = {
  title: string;
  subtitle: string;
  about: string;
  skills: string;
  experience: string;
  hobbies: string;
  projects: string;
  travelMap: string;
  contact: string;
  travelDescription: string;
  gamingDescription: string;
  visitedCountries: string;
  gamingAchievements: string;
  wechat: string;
  passion: string;
  passionDesc: string;
  goal: string;
  goalDesc: string;
  approach: string;
  approachDesc: string;
  learning: string;
  learningDesc: string;
}

// 定义languages对象的类型
const languages: Record<LanguageKey, LanguageContent> = {
  en: {
    title: "Andy's Profile",
    subtitle: "Software Developer, Creator, Traveler, Gamer",
    about: "I'm a versatile full-stack developer with a unique journey from IC design to software development. With 8+ years of experience in building enterprise applications, I specialize in Java backend services, modern frontend frameworks, and cloud solutions. I excel at solving complex technical challenges and have a proven track record in developing high-performance, scalable systems. Currently available for remote opportunities and freelance projects, I bring a deep understanding of technology from hardware to cloud architecture. Let's create something amazing together!",
    skills: "Skills",
    experience: "Work Experience",
    hobbies: "Hobbies",
    projects: "Projects",
    travelMap: "My Travel Map",
    contact: "Contact",
    travelDescription: "I've been fortunate to explore various parts of Asia. From the bustling streets of Tokyo to the serene beaches of Phuket, the vibrant culture of Kuala Lumpur, and the beautiful islands of the Philippines. Each destination offers unique experiences and unforgettable memories.",
    gamingDescription: "Gaming is more than just a hobby for me; it's a passion. From the epic raids in World of Warcraft to the competitive matches in League of Legends, and the immersive stories of single-player Steam games, I'm always ready for the next digital adventure.",
    visitedCountries: "Visited Countries",
    gamingAchievements: "Gaming Achievements",
    wechat: "WeChat",
    passion: "Technical Innovation",
    passionDesc: "Actively exploring emerging technologies and seeking challenging remote projects.",
    goal: "Remote Collaboration",
    goalDesc: "Looking for opportunities to work with global teams and contribute to innovative projects remotely.",
    approach: "Engineering Excellence",
    approachDesc: "Delivering high-quality solutions through modern tech stack and best practices.",
    learning: "Continuous Growth",
    learningDesc: "Staying at the forefront of technology trends and expanding expertise in AI and cloud solutions.",
  },
  zh: {
    title: "Andy的个人简历",
    subtitle: "软件开发者创作者，旅行者，游戏玩家",
    about: "作为一名全栈开发工程师，我拥有从IC设计到软件开发的独特经历。8年以上企业级应用开发经验，专注于Java后端服务、现代前端框架云解决方案。擅长解决复杂技术难题，在开发高性能、可扩展系统方面有着丰富经验。目前可接受远程工作机会和自由职业项目，我的硬件到云架构的深入理解让我能够提供全面的技术解决方案。期待与您共同创造精彩项目！",
    skills: "技能",
    experience: "工作经历",
    hobbies: "爱好",
    projects: "个人作品",
    travelMap: "我的旅行地图",
    contact: "联系我",
    travelDescription: "我有幸探索了亚洲的多个地区。从东京繁华的街道到普吉岛宁静的海滩，从吉隆坡多元的文化到菲律宾美丽的岛屿。每个目的都带来独特的体验和难忘的回忆。",
    gamingDescription: "我来说，游戏不仅仅是一种爱好，更是一种激情。从魔兽世界的史诗级团队副本到英联盟的竞技对，再到Steam上沉浸式的单机游戏故事，我随时准备迎接下一次数字冒险。",
    visitedCountries: "已访问国家",
    gamingAchievements: "游戏成就",
    wechat: "微信",
    passion: "技创新",
    passionDesc: "积极探索前沿技术，寻求具有挑战性的远程项目。",
    goal: "远程协作",
    goalDesc: "寻找与全球团队合作的机会，远程参与创新项目。",
    approach: "工程卓越",
    approachDesc: "通过现代技术栈和最佳实践交付高质量解决方案。",
    learning: "持续成长",
    learningDesc: "保持技术前沿，拓展AI和云解决方案领域的专业知识。",
  },
  ja: {
    title: "Andyのプロフィール",
    subtitle: "ソフトウェア開発者、クリエイター、旅行者、ゲーマー",
    about: "IC設計からソフトウェア開発まで、独自の経験を持つフルスタック開発者です。8年以上のエンタープライズアプリケーション開発経験を活かし、Javaバックエンド、モダンなフロントエンドフレームワーク、クラウドソリューションを専門としています。複雑な技術的課の解に長け、高性能でスケーラブルなシステム開発の実績があります。現在、リモートワークやフリーランスプロジェクトを募集中。ハードウェアからクラウドアーキテクチャまでの深い理解を活かし、革新的なソリューションを提供します。",
    skills: "スキル",
    experience: "職歴",
    hobbies: "趣味",
    projects: "プロジェト",
    travelMap: "私の行マップ",
    contact: "お問い合わせ",
    travelDescription: "アジアの様々な地域を探検する機会に恵まれました。東京の賑やかな街並みから、プーケットの静かなビーチ、クアラルンプールの多様な文化、そしてフィリピンの美しい島々まで。それぞれの目的地で独自の体験と忘れられない思い出を得ることができました。",
    gamingDescription: "ゲームは私にとって単なる趣味以上のもの、それは情熱です。World of Warcraftの壮大なレイドから、League of Legendsの競争的なマッチ、そしてSteamの没入型シングルプレ���ヤーゲームのストーリーまで、私はつねに次のデジタルアドベンチャーの準備ができています。",
    visitedCountries: "訪問した国",
    gamingAchievements: "ゲームの実績",
    wechat: "WeChat",
    passion: "技術革新",
    passionDesc: "最先端技術の探求と、チャンジングなリモートプロジェクトの追求。",
    goal: "リモートコラボレーション",
    goalDesc: "グローバルチームとの協力機会を探し、革新的なプロジェクトにリモートで貢献。",
    approach: "エンジニアリングの卓越性",
    approachDesc: "ダな技スタックとベストプラクティスによる高品質なソリューションの提供。",
    learning: "継続的な成長",
    learningDesc: "技術トレンドの最前線に立ち、AIとクラウドソリューションの専門知識を拡大。",
  },
}

// 首先更新 visitedCountries 数据
const visitedCountries: Country[] = [
  {
    name: "Japan",
    nameZh: "日本",
    coordinates: [139.6503, 35.6762], // 确保是两个数字的元组
    type: "visited",
    highlights: ["东京", "大阪", "京都", "富士山"],
    color: "#FF4B4B"
  },
  {
    name: "Malaysia",
    nameZh: "马来西亚",
    coordinates: [101.6869, 3.1390],
    type: "visited",
    highlights: ["吉隆坡", "槟城", "马六甲", "云顶高原"],
    color: "#4BB4FF"
  },
  {
    name: "Thailand",
    nameZh: "泰国",
    coordinates: [100.5018, 13.7563],
    type: "visited",
    highlights: ["曼谷", "普吉岛", "清", "芭提雅"],
    color: "#4BFF4B"
  },
  {
    name: "Philippines",
    nameZh: "菲律宾",
    coordinates: [120.9842, 14.5995],
    type: "visited",
    highlights: ["马尼拉", "宿务", "长滩岛", "巴拉望"],
    color: "#FFB74B"
  }
];

// 计划访问的国家
const plannedCountries: Country[] = [
  {
    name: "United States",
    nameZh: "美国",
    coordinates: [-95.7129, 37.0902], // 确保是两个数字的元组
    type: "planned",
    highlights: ["纽约", "洛杉矶", "旧金山", "黄石公园"],
    color: "#A78BFA"
  },
  {
    name: "New Zealand",
    nameZh: "新西兰",
    coordinates: [174.8860, -40.9006],
    type: "planned",
    highlights: ["奥克兰", "霍比特村", "皇后镇", "米尔福德峡湾"],
    color: "#34D399"
  },
  {
    name: "Iceland",
    nameZh: "冰岛",
    coordinates: [-19.0208, 64.9631],
    type: "planned",
    highlights: ["雷克雅未克", "蓝湖", "黄金圈", "极光"],
    color: "#60A5FA"
  },
  {
    name: "Egypt",
    nameZh: "埃及",
    coordinates: [30.8025, 26.8206],
    type: "planned",
    highlights: ["金字塔", "卢克索", "红海", "尼罗河"],
    color: "#F59E0B"
  }
];

// 更新游戏成就数据
const gamingAchievements = [
  {
    game: "英雄联盟2",
    achievement: "Top 1000 Rank",
    details: "作为资深玩家，在英雄联盟2中达到全服前1000名，精通多个英雄，擅长团队配合和策略制定",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#D13639">
        <path d="M12.534 21.77l-1.09-2.81 10.52-.62L16.4 9.91l1.62-4.7-4.17 4.31-1.89-8.14-1.89 8.14-4.17-4.31 1.62 4.7-5.56 8.43 10.52.62-1.09 2.81c-.38.984.435 2.052 1.09 2.052.655 0 1.47-1.068 1.09-2.052zm0 0" />
        <path d="M12 16.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm0 0" />
      </svg>
    ),
    stats: {
      rank: "全服前1000名",
      winRate: "65%+",
      matches: "1000+",
      mainHeroes: ["Invoker", "Storm Spirit", "Shadow Fiend"]
    }
  },
  {
    game: "World of Warcraft",
    achievement: "Mythic Raid Clear",
    details: "成当前版本团队副本挑战难度",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FFB54C">
        <path d="M3.219 2.154L6.75 4.5l3.25-1.5 3.25 1.5 3.531-2.346L19.5 4.5l-1.594 5.25L21 13.5l-2.938 1.594-.062 4.156-3.75 1.5-2.25-1.5-2.25 1.5-3.75-1.5-.062-4.156L3 13.5l3.094-3.75L4.5 4.5l-1.281-2.346z" />
      </svg>
    )
  },
  {
    game: "League of Legends",
    achievement: "Diamond Rank",
    details: "在英雄联盟中达到钻石段位",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00A8FF">
        <path d="M12 2L1.5 6.5v5c0 6.5 4.5 10 10.5 10s10.5-3.5 10.5-10v-5L12 2zm0 18c-4.5 0-8.5-2.5-8.5-8.5v-3.8L12 4.2l8.5 3.5v3.8c0 6-4 8.5-8.5 8.5z" />
      </svg>
    )
  },
  {
    game: "Steam",
    achievement: "Collection Master",
    details: "拥有100+游戏库藏，完成多个游戏白金成就",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1B2838">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4.586 12.086l.002-.006c.004-.008.008-.017.012-.025.004-.008.01-.015.015-.023.005-.007.01-.014.016-.021.006-.007.013-.013.02-.019.006-.007.013-.013.02-.019.007-.006.015-.011.022-.016.008-.005.015-.01.023-.015.008-.004.017-.008.025-.012l.006-.002 3.601-1.802c-.404-1.67.238-3.427 1.68-4.353 1.929-1.237 4.501-.695 5.738 1.234.521.813.711 1.752.569 2.665l3.601 1.802.006.002c.008.004.017.008.025.012.008.004.015.01.023.015.008.005.015.01.022.016.007.006.014.013.02.019.007.006.013.013.02.019.006.007.011.015.016.021.005.007.01.015.015.023.004.008.008.017.012.025l.002.006c.061.138.061.295 0 .433l-.002.006c-.004.008-.008.017-.012.025-.004.008-.01.015-.015.023-.005.007-.01.014-.016.021-.006.007-.013.013-.02.019-.006.007-.013.013-.02.019-.007.006-.015.011-.022.016-.008.005-.015.01-.023.015-.008.004-.017.008-.025.012l-.006.002-3.601 1.802c.142.913-.048 1.852-.569 2.665-1.237 1.929-3.809 2.471-5.738 1.234-1.442-.926-2.084-2.683-1.68-4.353l-3.601-1.802-.006-.002c-.008-.004-.017-.008-.025-.012-.008-.004-.015-.01-.023-.015-.008-.005-.015-.01-.022-.016-.007-.006-.014-.013-.02-.019-.007-.006-.013-.013-.02-.019-.006-.007-.011-.015-.016-.021-.005-.007-.01-.015-.015-.023-.004-.008-.008-.017-.012-.025l-.002-.006c-.061-.138-.061-.295 0-.433z" />
      </svg>
    )
  }
];

const projects = [
  {
    title: "Travel Blog",
    description: "A personal blog documenting my travel adventures. Built with Next.js, MDX, and Tailwind CSS, this responsive website showcases my journeys with stunning photography and engaging stories.",
    imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=1000&h=600",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    link: "https://example.com/travel-blog"
  },
  {
    title: "Game Companion App",
    description: "A mobile app to track gaming achievements and stats. Developed using React Native and Firebase, this app helps gamers manage their progress across multiple games and connect with fellow players.",
    imageSrc: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?fit=crop&w=1000&h=600",
    technologies: ["React Native", "Firebase", "Expo"],
    link: "https://example.com/game-companion"
  },
  {
    title: "Code Playground",
    description: "An online IDE for collaborative coding. This Vue.js-based platform uses WebSockets and Monaco Editor to provide real-time code sharing and execution, perfect for pair programming and teaching.",
    imageSrc: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?fit=crop&w=1000&h=600",
    technologies: ["Vue.js", "WebSockets", "Monaco Editor"],
    link: "https://example.com/code-playground"
  },
]

const skills = [
  // 编程语言
  {
    name: "Java",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#007396">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    ),
    color: "#007396"
  },
  {
    name: "JavaScript",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3178C6">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    color: "#3178C6"
  },
  {
    name: "SQL",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00618A">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
      </svg>
    ),
    color: "#00618A"
  },
  {
    name: "Dart",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0175C2">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
      </svg>
    ),
    color: "#0175C2"
  },
  // 前端技术
  {
    name: "Vue.js",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4FC08D">
        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
      </svg>
    ),
    color: "#4FC08D"
  },
  {
    name: "Flutter",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#02569B">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
      </svg>
    ),
    color: "#02569B"
  },
  // 后端技术
  {
    name: "Spring Boot",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#6DB33F">
        <path d="M20.59 5.41a10.94 10.94 0 0 1-1.88 3.13c-1.66 2.07-3.23 3.41-3.23 3.41l-4.24-4.24 4.24-4.24s1.57 1.34 3.23 3.41a10.94 10.94 0 0 1 1.88 3.13zM12 16.93l-4.24-4.24s1.57-1.34 3.23-3.41a10.94 10.94 0 0 0 1.88-3.13 10.94 10.94 0 0 0-1.88-3.13C9.33 1.95 7.76.61 7.76.61L12 4.85z" />
      </svg>
    ),
    color: "#6DB33F"
  },
  {
    name: "Node.js",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
      </svg>
    ),
    color: "#339933"
  },
  // 数据库
  {
    name: "MySQL",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4479A1">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
      </svg>
    ),
    color: "#4479A1"
  },
  {
    name: "MongoDB",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47A248">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
    color: "#47A248"
  },
  // 工具
  {
    name: "Docker",
    icon: Container,
    color: "#2496ED"
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "#FF9900"
  },
  // 前端框架和UI库
  {
    name: "ElementUI",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#409EFF">
        <path d="M21.7 6.53L12.57.43a1.49 1.49 0 00-1.14 0L2.3 6.53a1.45 1.45 0 00-.8 1.32v8.3c0 .55.3 1.06.8 1.32l9.13 6.1c.36.24.78.24 1.14 0l9.13-6.1c.5-.26.8-.77.8-1.32v-8.3c0-.55-.3-1.06-.8-1.32zM12 19.52l-7-4.67V9.14l7 4.67v5.71zm.57-7.75L5.57 7.1l7-4.67 7 4.67-7 4.67z" />
      </svg>
    ),
    color: "#409EFF"
  },
  {
    name: "Vuetify",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1867C0">
        <path d="M12 0L1 6v12l11 6 11-6V6L12 0zm8 16.5l-8 4.8-8-4.8v-9l8-4.8 8 4.8v9z" />
      </svg>
    ),
    color: "#1867C0"
  },
  {
    name: "Bootstrap",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#7952B3">
        <path d="M5.062 12h13.876c-.116 4.09-1.039 8-4.938 8-3.9 0-4.823-3.91-4.938-8zm6.938-8c3.9 0 4.823 3.91 4.938 8H5.062c.115-4.09 1.038-8 4.938-8zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    color: "#7952B3"
  },
  // 移动端开发
  {
    name: "uni-app",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2B9939">
        <path d="M12 0L2 6v12l10 6 10-6V6L12 0zm8 16.5l-8 4.8-8-4.8v-9l8-4.8 8 4.8v9z" />
      </svg>
    ),
    color: "#2B9939"
  },
  // 后端框架
  {
    name: "Spring",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#6DB33F">
        <path d="M20.59 5.41a10.94 10.94 0 0 1-1.88 3.13c-1.66 2.07-3.23 3.41-3.23 3.41l-4.24-4.24 4.24-4.24s1.57 1.34 3.23 3.41a10.94 10.94 0 0 1 1.88 3.13zM12 16.93l-4.24-4.24s1.57-1.34 3.23-3.41a10.94 10.94 0 0 0 1.88-3.13 10.94 10.94 0 0 0-1.88-3.13C9.33 1.95 7.76.61 7.76.61L12 4.85z" />
      </svg>
    ),
    color: "#6DB33F"
  },
  // 中间件和服务
  {
    name: "Elasticsearch",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FEC514">
        <path d="M13.5 1.5c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z" />
      </svg>
    ),
    color: "#FEC514"
  },
  {
    name: "RabbitMQ",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF6600">
        <path d="M23.035 9.601h-7.677a.956.956 0 01-.962-.962V.962a.956.956 0 00-.962-.962H10.57a.956.956 0 00-.962.962v7.677a.956.956 0 01-.962.962H.962A.956.956 0 000 10.563v2.874c0 .535.427.962.962.962h7.677c.535 0 .962.427.962.962v7.677c0 .535.427.962.962.962h2.874c.535 0 .962-.427.962-.962v-7.677c0-.535.427-.962.962-.962h7.677c.535 0 .962-.427.962-.962v-2.874a.956.956 0 00-.962-.962z" />
      </svg>
    ),
    color: "#FF6600"
  },
  {
    name: "Firebase",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FFCA28">
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    ),
    color: "#FFCA28"
  }
]

// 修改动态导入
const TravelMap = dynamic<{
  visitedCountries: Country[];
  plannedCountries: Country[];
}>(() => import('@/components/TravelMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-secondary/30 rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
});

export function PortfolioPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [lang, setLang] = useState<LanguageKey>('en')
  const [currentProject, setCurrentProject] = useState(0)
  const t = languages[lang]

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 text-foreground relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Theme and Language toggles */}
        <motion.div
          className="flex justify-end space-x-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('zh')}>中文</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang('ja')}>日本語</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-20 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Avatar className="w-40 h-40 border-4 border-primary">
            <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fit=crop&w=300&h=300" alt="Profile picture" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-xl mb-6 text-muted-foreground">{t.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <a href="mailto:andy@example.com" aria-label="Email Andy">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.contact}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/andy" target="_blank" rel="noopener noreferrer" aria-label="Andy's GitHub profile">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com/in/andy" target="_blank" rel="noopener noreferrer" aria-label="Andy's LinkedIn profile">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('WeChat: andy_wechat'); }} aria-label="Andy's WeChat">
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.81-.05-.857-2.578.157-4.972 2.344-6.432 2.183-1.453 5.242-1.862 7.83-.957 0-3.986-3.892-7.243-8.684-7.243zm-.261 4.885a.955.955 0 0 1 .942.968.955.955 0 0 1-.942.969.955.955 0 0 1-.942-.969.955.955 0 0 1 .942-.968zm5.137 0a.955.955 0 0 1 .942.968.955.955 0 0 1-.942.969.955.955 0 0 1-.942-.969.955.955 0 0 1 .942-.968zm10.433 5.55c0-3.24-3.175-5.872-7.09-5.872-3.914 0-7.09 2.632-7.09 5.872s3.176 5.873 7.09 5.873c.812 0 1.594-.103 2.321-.29a.718.718 0 0 1 .586.08l1.558.909a.263.263 0 0 0 .136.044c.13 0 .237-.108.237-.241 0-.06-.023-.118-.039-.174l-.319-1.211a.475.475 0 0 1 .174-.545C23.686 18.495 24 17.661 24 16.623zm-9.698-1.639a.784.784 0 0 1-.771-.793c0-.437.346-.792.771-.792.427 0 .772.355.772.792a.784.784 0 0 1-.772.793zm4.201 0a.784.784 0 0 1-.771-.793c0-.437.346-.792.771-.792.427 0 .772.355.772.792a.784.784 0 0 1-.772.793z" />
                  </svg>
                  {t.wechat}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?fit=crop&w=600&h=1400"
                alt="Profile"
                width={600}
                height={1400}
                className="w-full h-auto rounded-lg shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  className="col-span-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 rounded-lg backdrop-blur-sm border border-primary/10 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* 背景动画效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* 动态光效 */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      关于我
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {t.about}
                    </p>
                  </div>
                </motion.div>

                {/* 远程开发卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Globe className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      远程协作
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    擅长跨时区远程协作，可接受全球项目，提供专业技术支持
                  </p>
                </motion.div>

                {/* 技术创新卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      技术创新
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    热衷探索前沿技术，持续学习AI、云计算等新技术
                  </p>
                </motion.div>

                {/* 全栈开发卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Code2 className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      全栈开发
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    8年+企业级应用开发经验，精通前后端技术栈
                  </p>
                </motion.div>

                {/* 项目经验卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      项目经验
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    参与多个大型项目开发，擅长解决复杂技术难题
                  </p>
                </motion.div>

                {/* 自由职业卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Rocket className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      自由职业
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    接受自由职业目，提供专的技术解决方案
                  </p>
                </motion.div>

                {/* 硬件背景卡片 */}
                <motion.div
                  className="bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 backdrop-blur-sm border border-secondary/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Cpu className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      硬件背景
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    从IC设计到软件开发，深入理解底层技术
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">{t.skills}</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge
                  className="text-lg py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                >
                  <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">{t.experience}</h2>
          <div className="space-y-8">
            <TimelineItem
              icon={Briefcase}
              title="成都 Java开发/前端/app开发/全栈开发"
              period="2021.07-至今"
              location="成都"
              description="全栈开发工程师，负责多个项目的架构设计和开发现"
              projects={[
                {
                  title: "力运株式会社仓储系统",
                  period: "2021-至今",
                  type: "全栈开发",
                  description: "远程开发，合作开发，对原有的后仓储服务二次开发，实现多仓储的ERP后台服务",
                  details: [
                    "项目背景：远程开发，合作开发，对原有的后台仓储服务二次开发，核心业务是仓储的ERP后台服务，多用户体系、仓储货物追踪、进出库灯架控制等",
                    "开发环境架构：",
                    "• Vue3、Vuetify2、Pinia",
                    "• JDK1.8、SpringBoot、MyBatis-Plus",
                    "• Redis、MySQL、Skywalking、Elasticsearch",
                    "• AWS ECS、Git",
                    "技术负责：",
                    "1. 对现有的JSP+Java后台服务进行升级改造，进行前后分离，使用Vue3+Vuetify2重新设计后台页面，实现用户体系页面，权限页面，日志追踪页面",
                    "2. 使用若依plus的单体服务作为接口服务，主要实现：",
                    "   • 用户体系和权限设计",
                    "   • 日志服务和仓储变动追踪",
                    "   • 三方货架灯接口对接",
                    "   • 基于Redis延迟队列的任务处理",
                    "   • 基于Skywalking+ES探针技术的服务链路追踪"
                  ],
                  technologies: [
                    "Vue.js 3",
                    "Vuetify",
                    "Pinia",
                    "Spring Boot",
                    "MyBatis-Plus",
                    "Redis",
                    "MySQL",
                    "Skywalking",
                    "Elasticsearch",
                    "AWS ECS"
                  ]
                },
                {
                  title: "铭泰中弘 OA系统",
                  type: "全栈开发",
                  description: "企业信息化升级，搭建信息化后台系统",
                  details: [
                    "项目背景：企信息化升级，搭建信息化后台系，主要业务-人员组织架构、项目报表管、项目审核程、与老系统对接生成ODS文件",
                    "技术架构：ruoyi-plus二开项目、springboot单体、redis消息队列、mysql储、vue2前端页面、elementui",
                    "负责内容：项目架构设计、数据库建表、需求转业务、业务实现"
                  ],
                  technologies: ["Spring Boot", "Redis", "MySQL", "Vue.js", "Element UI"]
                },
                {
                  title: "博弈优品-闲置新生",
                  type: "二手批发电商小程序",
                  description: "2B&2C商城项目，主营二手手机销售",
                  details: [
                    "项目背景：2B&2C商城项目主营二手手机销售，核心业务包括二手批发、回收报价、自由市场、2C嫁接商城、质检管理、ERP",
                    "技术架构：Uniapp、unicloud、MongoDB、Elasticsearch、Pinia、Redis、unicloud云函、uniadmin、VantUI、NVUI",
                    "负责内容：",
                    "- 负责项目多端技术实现、技术选型、需求转化数据库表设计、开发环境搭建",
                    "- 实现多端登录、支付、地图、统计、用户体系、服等功能",
                    "- Java对接京东物流，实现预单下单云打印物流推送"
                  ],
                  technologies: ["Uniapp", "MongoDB", "Elasticsearch", "Java", "Vue.js"]
                },
                {
                  title: "骑士派小程序",
                  type: "全栈开发",
                  description: "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端（用户端/骑士端）",
                  details: [
                    "目背景：远开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端/骑士端",
                    "开发环境架构：",
                    "• JDK1.8、SpringBoot、MyBatis",
                    "• Redis、Vue3、Uniapp、Vant",
                    "• Docker、MinIO、GitLab",
                    "技术负责：",
                    "1. 使用Uniapp开发小程序前端，后端基于若依plus的接口服务与后台服务，主要实现：",
                    "   • 多租户的用户体系",
                    "   • 阿里云短信登录",
                    "   • 对接微信支付宝支付",
                    "   • 基于Redis迟队列订阅管道",
                    "   • 定位的实现区域自动派单",
                    "   • 超时支付单处理",
                    "   • 罚单计算（位置异常超时异常）",
                    "   • Redission锁解决抢单并发",
                    "2. Uniapp功能实现：",
                    "   • 内置腾讯地图导航、描点、选点、路线规划",
                    "   • 分享海报",
                    "   • 订阅模板消息",
                    "   • 骑手端抢单大厅",
                    "3. 后台管理系统（Vue3 + Element UI）实现：",
                    "   • 用户体系",
                    "   • 订单管理",
                    "   • 网站管理",
                    "   • 内容管理",
                    "   • 数据统计",
                    "   • Excel导入导出"
                  ],
                  technologies: [
                    "Vue.js 3",
                    "Uniapp",
                    "Spring Boot",
                    "MyBatis",
                    "Redis",
                    "Docker",
                    "MinIO",
                    "Element UI",
                    "Vant"
                  ]
                }
              ]}
            />
            <TimelineItem
              icon={Briefcase}
              title="都数智设计作室 Java开发"
              period="2020.07-2021.07"
              location="成都"
              description="参与公司产品的需求分析，架构设计，编码、技术文档编写等开发工作、负责后台服务开发"
              projects={[
                {
                  title: "品冠销售二手汽车销售服务系统",
                  type: "全栈开发",
                  description: "二手汽车销售服务系统，包含管理端后台系统、API服务、支付系统、客服系统",
                  details: [
                    "项目背景：",
                    "1. 管理端后台系前端搭建以及业务实现",
                    "2. Android App WebView混合开发，系统主要包含：",
                    "   • 管理端后台系统",
                    "   • API服务",
                    "   • 支付系",
                    "   • 客服系统",
                    "主要功能：",
                    "• API服务：注册、登录、客服、汽车商品展示、维修保养、销售预约、销售评价",
                    "• 后台系统：商品管理、用户管理、商品服务管理、订单管理、支付管理、第三方支付渠道管理、报表统计客服管理、系统配置",
                    "• App：使用WebView套壳网实现App功能",
                    "开发环境架构：",
                    "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                    "• SpringBoot、MyBatis-plus、Redis、Satoken",
                    "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                    "技术负责：",
                    "1. 负责项目管理端后台系统：",
                    "   • 服务搭建、技术选型",
                    "   • 参与需求转化数据库设计",
                    "   • 开发环境搭建",
                    "   • 后台系统服务业务功能开发实现",
                    "2. 核心功能实现：",
                    "   • 引入Satoken+Redis轻量化框架实现权限",
                    "   • Lock4j+Redis分布式锁防重提交",
                    "   • 定时器实现客户预约自动销售分配、自动短信通知、自动通知栏送",
                    "3. 系统集成：",
                    "   • 后台集成极光推送客服端，现群推定向推送功能",
                    "   • 引入Skywalking实现服务性能监控、日志采集、告警",
                    "   • 实现基于AOP的日志管理",
                    "4. App端开发：",
                    "   • WebView与前端混合开发，节约多端开发成本",
                    "   • 集成常用App功能：",
                    "     - 支付宝SDK",
                    "     - 微信SDK",
                    "     - 极光SDK",
                    "     - OpenInstall SDK",
                    "   • 实现功能：",
                    "     - 后台推送手机消息",
                    "     - 拉起支付",
                    "     - 带参安装",
                    "     - 安装下载统计",
                    "     - 微信分享",
                    "     - 地图导航"
                  ],
                  technologies: [
                    "Spring Boot",
                    "MyBatis-Plus",
                    "Redis",
                    "MySQL",
                    "Elasticsearch",
                    "Android",
                    "WebView",
                    "Satoken",
                    "Lock4j",
                    "MinIO",
                    "Skywalking"
                  ]
                }
              ]}
            />
            <TimelineItem
              icon={Briefcase}
              title="成都软通动力（华为成都研究所） Java开发"
              period="2016.12-2020.01"
              location="成都"
              description="参与华为多个重要项目的开发和维护工作"
              projects={[
                {
                  title: "华为 AIFlow 算法训练平台",
                  type: "后端开发",
                  description: "华为2012实验室下的AiFlow算法训练平台开发，实现机器学习和深度学习的在线训练平台",
                  details: [
                    "项目背景：华为2012实验室下的AiFlow算法训练平台开发，平台主要功能：",
                    "• 机械&深度学习jupter在线算法编辑",
                    "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监、日志检索",
                    "• 数据标注服务、数据清洗服务、数据集检索服务",
                    "• 支持可选TensorFlow&Caffe框架运算，支持多机多卡任务训练",
                    "开发环境架构：",
                    "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                    "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                    "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                    "技术负责：",
                    "1. 后台深度学管理功能实现：",
                    "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                    "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                    "   • 数据集模块",
                    "   • 一键运行日志批量导入ES实现快速检索",
                    "2. 实现深学习任务调服务：",
                    "   • 线程池多线程处理任务调度",
                    "   • 延迟任务调度实现",
                    "3. 邮件服务审批资源：",
                    "   • 绑定MQ任务消息队列",
                    "   • 消费任务消息根据类型（深度、机器、多机多卡）根据邮件模板发邮件到相关负责人"
                  ],
                  technologies: [
                    "Spring Cloud",
                    "Nacos",
                    "Gateway",
                    "MyBatis-Plus",
                    "RabbitMQ",
                    "Redis",
                    "MongoDB",
                    "Elasticsearch",
                    "TensorFlow",
                    "Caffe"
                  ]
                },
                {
                  title: "华为印度电信商BA基站系统",
                  type: "后端开发",
                  description: "为无线部门为印度电信商搭建的基站管理系统，实现设备运营状态的统和管理",
                  details: [
                    "项目背景：该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态，集库存、修理、责任人一体化统计管理基站设备",
                    "开发环境架构：",
                    "• JDK1.7、虚拟云桌面、Maven、SVN",
                    "• SpringMVC、MyBatis、MQ、Redis",
                    "• JSP、Bootstrap",
                    "技术负责：",
                    "1. 后台新增模块实现：",
                    "   • 基站数据信息汇总定时器拉取json数据批量入库",
                    "   • AOP加解密实现",
                    "2. 性能优化：",
                    "   • 处理线上性能故障进行性能调优",
                    "   • 处慢SQL",
                    "   • 修改日bug",
                    "3. 数据库分表，部分代码重构"
                  ],
                  technologies: [
                    "Spring MVC",
                    "MyBatis",
                    "Redis",
                    "MQ",
                    "JSP",
                    "Bootstrap",
                    "Maven"
                  ]
                }
              ]}
            />
            <TimelineItem
              icon={Briefcase}
              title="成都迁之游（2K GAME）有限公司 QA"
              period="2016.08-2016.09"
              location="成都"
              description="参与2K GAME游戏测试部门，负责多款知名游戏的测试工作"
              projects={[
                {
                  title: "2K Games 游戏测试",
                  type: "游戏测试",
                  description: "参与多款2K Games旗下知名游戏的功能测试、性能测试和本地化测试工作",
                  details: [
                    "项目背景：",
                    "作为QA团队成员参与2K Games旗下多款知名游戏的测试工作，包括：",
                    "• 黑手党2（Mafia II）",
                    "• 文明手游（Civilization Mobile）",
                    "• NBA 2K系列",
                    "• 无主之地（Borderlands）",
                    "测试职责：",
                    "1. 能测试：",
                    "   • 执行游戏功能的系统测试",
                    "   • 验证游戏核心玩法和机制",
                    "   • 检查游戏界面和用户交互",
                    "   • 测试多平台兼容性",
                    "2. 性能测试：",
                    "   • 监测游戏运行性能",
                    "   • 检查游戏加载时间",
                    "   • 评估游戏稳定性",
                    "   • 测试不同硬件配置下的表现",
                    "3. 本地化测试：",
                    "   • 验证游戏文本翻译准确性",
                    "   • 检查面布局适配",
                    "   • 确认本地化内容的文适应性",
                    "4. Bug报告和跟踪：",
                    "   • 详细记录发现的问题",
                    "   • 使用bug跟踪系统提交报告",
                    "   • 验证bug修复情况",
                    "   • 参与每日测试总结会议",
                    "主要成果：",
                    "• 参与完成多款游戏的质量保证工作",
                    "• 提供详细的测试报告和改进建议",
                    "• 协助提升游戏用户体验",
                    "• 确保游戏发布质量达标"
                  ],
                  technologies: [
                    "游戏测试",
                    "Bug跟踪系统",
                    "性能测试工具",
                    "本地化测试",
                    "测试用例设",
                    "测试报告编写"
                  ]
                }
              ]}
            />
            <TimelineItem
              icon={Briefcase}
              title="成都微光集电科技有限公司 模拟layout工程师"
              period="2015.08-2016.08"
              location="成都"
              description="参与多个芯片的模拟版图设计与验证工作"
              projects={[
                {
                  title: "华力微电子40nm工艺PR数字单元库设计",
                  type: "模拟版图设计",
                  description: "数字单元库的模拟版图设计与验证",
                  details: [
                    "• 基于华力微电子40nm工艺进行PR数字单元库的模拟版图设计",
                    "• 负责版图设计、DRC/LVS验证、参数提取等工作",
                    "• 确保设计满足工艺规则和性能要求"
                  ],
                  technologies: [
                    "Cadence Virtuoso",
                    "40nm工艺",
                    "DRC/LVS",
                    "参数提取"
                  ]
                },
                {
                  title: "斗小辣椒手机指纹芯片",
                  type: "模拟版图设计",
                  description: "指纹芯片振荡器模块的模拟版图设计与验证",
                  details: [
                    "• 基于华力微电子55nm工艺进行指纹芯片振荡器模块设计",
                    "• 负责振荡器模块的版图设计与验证",
                    "• 进行电路仿真和性能验证",
                    "• 确保设计满足指纹识别的性能要求"
                  ],
                  technologies: [
                    "Cadence Virtuoso",
                    "55nm工艺",
                    "振荡器设计",
                    "电路仿真"
                  ]
                },
                {
                  title: "高清摄头传感器",
                  type: "模拟版图设计",
                  description: "1600w/400w/200w摄像头传感器的版图设计与验证",
                  details: [
                    "• 基于华力微电子55nm工艺进行摄像头传感器版图设计",
                    "• 责1600w/400w/200w像素传感器的模拟版图实现",
                    "• 进行DRC/LVS验证和参数提取",
                    "• 确保设计满足图像采集的性能指标"
                  ],
                  technologies: [
                    "Cadence Virtuoso",
                    "55nm工艺",
                    "CMOS传感器",
                    "DRC/LVS"
                  ]
                }
              ]}
            />
            <TimelineItem
              icon={GraduationCap}
              title="电子科技大学成都学院"
              period="2011.09-2015.08"
              location="成都"
              description="电子科学与技术（微电子）本科"
            />
            <TimelineItem
              icon={Briefcase}
              title="都索成易半导体有限公司 模拟电路工程师"
              period="2014.03-2014.11"
              location="成都"
              description="参与富士通50nm工艺下苹果摄像头传感器（索尼IMX系列传感器）模拟电路电源模块实现、电路验证与仿真"
              projects={[
                {
                  title: "索IMX220摄像传感器芯",
                  type: "模拟电路设计",
                  description: "iPhone 6摄像头1200万像素传感器的电源管理模块设计与验证",
                  details: [
                    "项目背景：",
                    "基于富士通50nm工艺，为索尼IMX220摄像传感器芯片（iPhone 6摄像头1200W）进行电源管理模块的设计与验证",
                    "主要工作：",
                    "1. 版图设计：",
                    "   • 基于富士通50nm工艺进行BCTOP（电源管理模块）版图设计",
                    "   • 遵循工艺设计规则和电气规则进行版图实现",
                    "2. 寄生参数提取：",
                    "   • 使用StarRC软件进行BA（寄生电容）提取",
                    "   • 进行EM（电磁场）寄生效应分析",
                    "3. 电路仿真与验证：",
                    "   • AC分析：交流特性验证",
                    "   • DC分析：直流工作点验证",
                    "   • Tran分析：瞬态响应分析",
                    "   • SSH分析：索尼电气规则检测",
                    "4. 性能优化：",
                    "   • 基于仿真结果优化设计",
                    "   • 确保电源管理模块满足性能指标",
                    "   • 优化功耗和面"
                  ],
                  technologies: [
                    "Cadence Virtuoso",
                    "StarRC",
                    "50nm工艺",
                    "模拟版图设计",
                    "电路仿真",
                    "寄生提取",
                    "电源管理"
                  ]
                }
              ]}
            />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">{t.projects}</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary/30 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <Image
                    src={projects[currentProject].imageSrc}
                    alt={projects[currentProject].title}
                    width={800}
                    height={300}
                    className="w-full md:w-1/2 h-[300px] object-cover rounded-lg"
                  />
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">{projects[currentProject].title}</h3>
                    <p className="mb-4 text-muted-foreground">{projects[currentProject].description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentProject].technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline">
                      <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">{t.hobbies}</h2>
          <Tabs defaultValue="travel" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="travel">Traveling</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
            </TabsList>
            <TabsContent value="travel">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Plane className="w-8 h-8 mr-4 text-primary animate-bounce" />
                  <h3 className="text-2xl font-semibold">Travel Map</h3>
                </div>
                <p className="mb-6 text-lg">{t.travelDescription}</p>
                <div>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-primary" />
                    {t.visitedCountries}
                  </h4>
                  <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <TravelMap visitedCountries={visitedCountries} plannedCountries={plannedCountries} />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="gaming">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="flex items-center mb-6">
                  <Gamepad className="w-8 h-8 mr-4 text-primary animate-pulse" />
                  <h3 className="text-2xl font-semibold">Gaming Journey</h3>
                </div>

                <p className="mb-8 text-lg leading-relaxed">{t.gamingDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gamingAchievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-card/50 backdrop-blur-sm p-6 rounded-lg hover:bg-card/70 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg mr-3">
                          {achievement.icon()}
                        </div>
                        <h4 className="font-semibold text-lg">{achievement.game}</h4>
                      </div>

                      <div className="space-y-2">
                        <Badge variant="secondary" className="mb-2">
                          {achievement.achievement}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {achievement.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 游戏统计 */}
                <div className="mt-8 bg-card/50 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                    游戏统计
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 英雄联盟2 详细数据 */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-semibold flex items-center gap-2">
                        <span className="text-red-500">⚔️</span> 英雄联盟2 数据
                      </h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-muted-foreground">排名: Top 1000</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">胜率: 65%+</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">比赛场次: 1000+</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Medal className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">擅长位置: 中单/打野</span>
                        </div>
                      </div>
                    </div>

                    {/* 总体游戏统计 */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-semibold flex items-center gap-2">
                        <Gamepad className="w-4 h-4 text-primary" /> 总体统计
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">游戏时长: 2000+ 小时</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Medal className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">获得成就: 500+</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">组队玩家: 1000+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>
      </div>
    </div>
  )
}

function TimelineItem({
  icon: Icon,
  title,
  period,
  location,
  description,
  projects
}: {
  icon: React.ElementType
  title: string
  period: string
  location: string
  description?: string
  projects?: Project[]
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="flex items-start group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 时间线图标 */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mr-4 group-hover:bg-primary/30 transition-colors">
        <Icon className="w-6 h-6" />
      </div>

      <div className="flex-1">
        {/* 标部分 */}
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-semibold text-xl">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {period}
          </Badge>
        </div>

        {/* 位置信息 */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* 描述息 */}
        {description && (
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* 项目列表 */}
        {projects && projects.length > 0 && (
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                mb-2 
                transition-all 
                duration-300 
                flex 
                items-center 
                ${isExpanded
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary'
                }
                shadow-sm
                hover:shadow-md
                transform hover:translate-y-[-1px]
              `}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="mr-2"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
              <span className="font-medium">
                {isExpanded ? '收起项目详情' : '查看项目详情'}
                <span className="ml-1 px-2 py-0.5 bg-white/10 rounded-full text-xs">
                  {projects.length}
                </span>
              </span>
            </Button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 pl-4 border-l-2 border-primary/20"
                >
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// 新增 ProjectCard 组件来展示项目详情
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-secondary/10 p-6 rounded-lg hover:bg-secondary/20 transition-all duration-300 group"
    >
      {/* 项目标题和类型 */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h4 className="text-xl font-semibold text-primary group-hover:text-primary/80">
          {project.title}
        </h4>
        <Badge variant="secondary" className="font-medium">
          {project.type}
        </Badge>
        {project.period && (
          <span className="text-sm text-muted-foreground">
            {project.period}
          </span>
        )}
      </div>

      {/* 项目描述 */}
      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* 项目详情 */}
      <div className="space-y-4 mb-6">
        {project.details.map((detail, i) => {
          const isTitle = detail.endsWith('：') || detail.endsWith(':');
          const isListItem = detail.trim().startsWith('•') || detail.trim().startsWith('-');

          return (
            <div key={i} className={`${isTitle ? 'mt-4' : ''}`}>
              {isTitle ? (
                <h5 className="text-base font-semibold mb-2 text-primary/90">
                  {detail}
                </h5>
              ) : isListItem ? (
                <p className="text-sm text-muted-foreground pl-4 leading-relaxed">
                  {detail}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* 技术 */}
      <div className="border-t border-primary/10 pt-4">
        <h5 className="text-sm font-medium mb-3 text-muted-foreground">
          技术栈
        </h5>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="outline"
              className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}