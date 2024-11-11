// 首先定义基础类型
interface MultiLanguageText {
    en: string;
    zh: string;
    ja: string;
}

interface Project {
    title: MultiLanguageText;
    type: MultiLanguageText;
    description: MultiLanguageText;
    details: {
        en: string[];
        zh: string[];
        ja: string[];
    };
    technologies: string[] | {
        en: string[];
        zh: string[];
        ja: string[];
    };
}

interface Company {
    name: MultiLanguageText;
    period: string;
    location: string;
    description: MultiLanguageText;
    projects?: Project[];
}

// 添加 LanguageKey 类型定义
type LanguageKey = 'en' | 'zh' | 'ja';

// 修改 WorkExperience 接口定义
interface WorkExperience {
    [key: string]: {  // 修改这里，允许使用字符串索引
        companies: {
            softwareCompany: Company;
            digitalStudio: Company;
            huawei: Company;
            gameCompany: Company;
            microlight: Company;
            university: Omit<Company, 'projects'>;
            semiconductor: Company;
        };
    };
}

interface LanguageContent {
    // ... 其他内容
    projectCard: {
        technicalStack: string;
        background: string;
        architecture: string;
        responsibilities: string;
    };
}

const languages: Record<LanguageKey, LanguageContent> = {
    en: {
        // ... 其他内容
        projectCard: {
            technicalStack: "Technical Stack",
            background: "Project Background:",
            architecture: "Development Architecture:",
            responsibilities: "Technical Responsibilities:",
        }
    },
    zh: {
        // ... 其他内容
        projectCard: {
            technicalStack: "技术栈",
            background: "项目背景：",
            architecture: "开发环境架构：",
            responsibilities: "技术负责：",
        }
    },
    ja: {
        // ... 其他内容
        projectCard: {
            technicalStack: "技術スタック",
            background: "プロジェクト背景：",
            architecture: "開発環境・アーキテクチャ：",
            responsibilities: "技術担当：",
        }
    }
};

export const workExperience: WorkExperience = {
    en: {
        companies: {
            softwareCompany: {
                name: {
                    en: "Software Developer",
                    zh: "软件开发工程师",
                    ja: "ソフトウェア開発者"
                },
                period: "2021.07-Present",
                location: "Chengdu",
                description: {
                    en: "Full stack development engineer, responsible for architecture design and development of multiple projects",
                    zh: "全栈开发工程师，负责多个项目的架构设计和开发",
                    ja: "フルスタック開発エンジニアとして、複数のプロジェクトのアーキテクチャ設計と開発を担当"
                },
                projects: [
                    {
                        title: {
                            en: "Enterprise Information Management System",
                            zh: "铭泰中弘企业信息管理系统",
                            ja: "銘泰中弘企業情報管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Enterprise information system upgrade, building information backend system, mainly for personnel organization structure, project report management, project audit process, and ODS file generation with old system docking",
                            zh: "企业信息化升级，搭建信息化后台系统，主要业务-人员组织架构、项目报表管理、项目审核流程、与老系统对接生成ODS文件",
                            ja: "企業情報システムのアップグレード、情報バックエンドシステムの構築、主に人事組織構造、プロジェクトレポート管理、プロジェクト監査プロセス、旧システムとの連携によるODSファイル生成"
                        },
                        details: {
                            en: [
                                "Project Role: Backend system construction, database design, business implementation",
                                "Project Background:",
                                "Enterprise information system upgrade, building information backend system for personnel organization structure, project report management, project audit process, and ODS file generation with legacy system integration",
                                "Project Architecture:",
                                "• Ruoyi-plus secondary development",
                                "• Spring Boot monolithic service",
                                "• Redis message queue",
                                "• MySQL storage",
                                "• Vue.js 2 frontend",
                                "• Element UI",
                                "Technical Responsibilities:",
                                "1. Project architecture design, database schema design, requirement analysis and business implementation"
                            ],
                            zh: [
                                "项目角色：后台系统搭建 数据建表 业务实现",
                                "项目背景：",
                                "企业信息化升级，搭建信息化后台系统，主要业务-人员组织架构 项目报表管理项目审核流程 与老系统对接生成ODS文件",
                                "项目架构：",
                                "• ruoyi-plus二开项目",
                                "• springboot单体",
                                "• redis消息队列",
                                "• mysql存储",
                                "• vue2前端页面",
                                "• elementui",
                                "技术负责：",
                                "1. 项目架构设计 数据库建表 需求转业务 业务实现"
                            ],
                            ja: [
                                "プロジェクト役割：バックエンドシステム構築、データベース設計、業務実装",
                                "プロジェクト背景：",
                                "企業情報システムのアップグレード、情報バックエンドシステムの構築、主に人事組織構造、プロジェクトレポート管理、プロジェクト監査プロセス、レガシーシステムとの統合によるODSファイル生成のための情報バックエンドシステムの構築",
                                "プロジェクトアーキテクチャ：",
                                "• Ruoyi-plusの二次開発",
                                "• Spring Bootモノリシックサービス",
                                "• Redisメッセージキュー",
                                "• MySQLストレージ",
                                "• Vue.js 2フロントエンド",
                                "• Element UI",
                                "技術担当：",
                                "1. プロジェクトアーキテクチャ設計、データベーススキマ要件分析、業実"
                            ]
                        },
                        technologies: [
                            "Spring Boot",
                            "Redis",
                            "MySQL",
                            "Vue.js 2",
                            "Element UI",
                            "Ruoyi Plus"
                        ]
                    },
                    {
                        title: {
                            en: "Second-hand Mobile Phone Trading Platform",
                            zh: "博弈优品闲置新生二手批发电商小程序",
                            ja: "中古携帯電話取引プラットフォーム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A B2B&B2C marketplace project focusing on second-hand mobile phone sales. Core business includes second-hand wholesale, recycling quotation, free market, B2C mall integration, quality inspection management, and ERP",
                            zh: "该项目为2B&2C商城项目主营二手手机销售，核心业务二手批发、回收报价、自由市场、2C嫁接商城、质检管理、ERP",
                            ja: "B2B&B2Cマーケットプレイスプロジェクトで、中古携帯電話販売に焦点を当てています。主要業務は中古卸売、リサイクル見積もり、フリーマーケット、B2Cモール統合、品質検査管理、ERPを含みます"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "A B2B&B2C marketplace project focusing on second-hand mobile phone sales. The main technology is based on uniapp unicloud cloud serverLess multi-end application development, php erp inventory backend and order interface payment interface service, as well as third-party interface logistics warranty information docking java interface service",
                                "Development Environment & Architecture:",
                                "• Uniapp unicloud mongodb elasticsearch pinia redis",
                                "• unicloud cloud functions uniadmin vantUI NVUI",
                                "• Java interface service based on ruoyi plus",
                                "Technical Responsibilities:",
                                "1. Responsible for multi-end technical implementation, technology selection, database design, development environment setup, server setup, and quality inspection backend system service development",
                                "2. Using unicloud suite to implement multi-end login (WeChat, SMS, password), unipay2 payment, unimap map, uni multi-end statistics, uni-id unified user system, uni-im customer service and unipush app push notifications",
                                "3. Using cloud functions and cloud objects for full-stack service integration, MongoDB-based model data retrieval and Alibaba Cloud es serverLess inventory search",
                                "4. Java integration with JD Logistics for pre-order cloud printing and logistics push",
                                "5. Frontend poster design, custom camera, QR code sharing, scanning, Bluetooth printer connection, interceptor-based configurable permissions, multi-homepage design, multi-tabbar design, map point selection, trajectory and positioning implementation"
                            ],
                            zh: [
                                "项目背景：",
                                "该项目为2B&2C商城项目主营二手手机销售，核心业务二手批发 回收报价 自由市场 2C嫁接商城 质检管理 erp；主要的技术是基于uniapp unicloud云serverLess开发多端应用，php erp库存后台以及订单接口支付接口服务，以及三方接口物流 保修信息对接 java接口服务",
                                "开发环境架构：",
                                "• Uniapp unicloud mongdb elasticsearch pinia redis",
                                "• unicloud云函数对象 uniadmin vantUI NVUI",
                                "• 基于若依plus的java接口服务",
                                "技术负责：",
                                "1. 负责项目多端下技术实现、技术选型、参与需求转化数据库表设计、开发环境搭建、服务器搭建、质检后台系统服务业务功能开发实现",
                                "2. 使用unicloud全家桶实现多端登录（微信 短信 密码等登录），unipay2支付 unimap地图 uni多端统计 uni-id统一用户体系，uni-im客服以及unipush app端推送，使用云函数云对象一套系统集成前后端全栈服务，基于MongoDB的型号数据检索以及阿里云es serverLess服务存检索",
                                "3. java对接京东物流 实现预单下单云打印物流推送",
                                "4. 前端海报设计 自定义相机 二维码分享 扫码 连接蓝牙打印机 基于拦截器的可配置权限 多首页设计 多tabbar设计 地图选点 轨迹 定位实现"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "B2B&B2Cマーケットプレイスプロジェクトで、中古携帯電話販売を主要業務とし、中古卸売、リサイクル見積もり、フリーマーケット、B2Cモール統合、品質検査管理、ERPなどの核心業務を含む。主な技術はuniapp unicloudクラウドserverLessによるマルチエンドアプリケーション開発、php erpインベントリバックエンドと注文インターフェース決済インターフェースサービス、および第三者物流インターフェース保証情報連携javaインターフェースサービス",
                                "開発環境・アーキテクチャ：",
                                "• Uniapp unicloud mongodb elasticsearch pinia redis",
                                "• unicloudクラウド関数オブジェクト uniadmin vantUI NVUI",
                                "• Ruoyi plusベースのjavaインターフェースサービス",
                                "技術担当：",
                                "1. マルチエンド技術実装、技術選定、要件変換データベース設計、開発環境構築、サーバー構築、品質検査バックエンドシステムサービス機能開発を担当",
                                "2. unicloudスイートを使用してマルチエンドログイン（WeChat、SMS、パスワード）、unipay2決済、unimapマップ、uniマルチエンド統計、uni-id統一ユーザーシステム、uni-imカスタマーサービスおよびunipush appプッシュ通知を実装",
                                "3. クラウド関数とクラウドオブジェクトを使用したフルスタックサービス統合、MongoDBベースのモデルデータ検索とAlibaba Cloud es serverLessインベントリ検索",
                                "4. JD物流との連携による事前注文クラウド印刷と物流プッシュの実装",
                                "5. フロントエンドポスターデザイン、カスタムカメラ、QRコード共有、スキャン、Bluetoothプリンター接続、インターセプターベースの設定可能な権限、マルチホームページデザイン、マルチタブバーデザイン、マップポイント選択、軌跡と位置情報の実装"
                            ]
                        },
                        technologies: [
                            "Uniapp",
                            "UniCloud",
                            "MongoDB",
                            "Elasticsearch",
                            "Pinia",
                            "Redis",
                            "Java",
                            "VantUI",
                            "NVUI"
                        ]
                    },
                    {
                        title: {
                            en: "Knight Delivery Mini Program",
                            zh: "骑士派小程序",
                            ja: "ナイトデリバリーミニプログラム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Remote development, full-stack development, independent development, WeChat mini program that can be packaged as Android app, with 4 ends including user end and rider end",
                            zh: "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                            ja: "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development, full-stack development, independent development of a WeChat mini program that can be packaged as an Android app, with 4 endpoints including user end and rider end",
                                "Development Environment & Architecture:",
                                "• JDK1.8, GitLab",
                                "• Spring Boot, MyBatis",
                                "• Redis, Vue.js 3, Uniapp, Vant",
                                "• Docker, MinIO",
                                "Technical Responsibilities:",
                                "1. Developed mini program frontend using Uniapp, backend services based on Ruoyi Plus framework, implementing multi-tenant user system, Aliyun SMS login, WeChat and Alipay payment integration, Redis-based delayed queue subscription pipeline for automatic order dispatch based on location and timeout payment order processing (location and timeout anomaly penalty calculation), using Redisson locks for concurrent order grabbing",
                                "2. Implemented built-in Tencent Map navigation with point marking, point selection, and route planning, sharing posters, subscription template messages, rider order grabbing hall, backend Vue.js 3 + Element UI implementation of user system, order management, website management, content management, data statistics with Excel import/export"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                                "开发环境架构：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技术负责：",
                                "1. 使用Uniapp开发小程序前端，后端基于若依plus的接口服务与后台服务，主要实现多租户的用户体系，阿里云短信登录，对接微信支付宝支付，基于Redis延迟队列订阅管道以及定位的实现区域自动派单以及超时支付订单处理 罚单计算（位置异常超时异常），Redission锁解决抢单并发",
                                "2. Uniapp实现内置腾讯地图导航 描点 选点 路线规划，分享海报，订阅模板消息、骑手端抢单大厅，后台Vue.js 3 + Element UI实现用户体系，订单管理，网站管理，内容管理，数据统计Excel导入导出等"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技術担当：",
                                "1. Uniappを使用してミニプログラムのフロントエンド開発、Ruoyi Plusフレームワークに基づくバックエンドサービス、マルチテナントユーザーシステム、Aliyun SMS認証、WeChatとAlipay決済連携、Redis遅延キューサブスクリプションパイプラインによる位置情報に基づく自動配車と支払いタイムアウト処理（位置異常タイムアウト異常のペナルティ計算）、Redissonロックによる同時注文処理の実装",
                                "2. 腾讯地図ナビゲーションの組み込み実装（ポイントマーキング、ポイント選択、ルート計画）、ポスター共有、サブスクリプションテンプレートメッセージ、ライダー注文受付ホール、バックエンドVue.js 3 + Element UIによるユーザーシステム、注文管理、ウェブサイト管理、コンテンツ管理、データ統計のExcelインポート/エクスポート機能の実装"
                            ]
                        },
                        technologies: [
                            "Uniapp",
                            "Vue.js 3",
                            "Spring Boot",
                            "MyBatis",
                            "Redis",
                            "Docker",
                            "Element UI",
                            "Vant",
                            "MinIO"
                        ]
                    },
                    {
                        title: {
                            en: "Rikiyun Corporation Warehouse Management System",
                            zh: "力运株式会社仓储管理系统",
                            ja: "力運株式会社倉庫管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive warehouse management system with multi-warehouse ERP backend services, featuring multi-tenant architecture, inventory tracking, and automated warehouse lighting control",
                            zh: "全面的仓储管理系统，实现多仓储ERP后台服务，包含多用户体系、仓储货物追踪、进出库灯架控制等核心功能",
                            ja: "マルチ倉庫ERPバックエンドサービス、マルチテナントアーキテクチャ、在庫追跡、自動倉庫照明制御を備えた総合的な倉庫管理システム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development and collaborative project to modernize existing JSP backend warehouse service. Core business includes:",
                                "• Multi-warehouse ERP backend service integration",
                                "• Multi-tenant user system architecture",
                                "• Real-time inventory tracking",
                                "• Smart warehouse lighting control",
                                "• Comprehensive warehouse data analytics",
                                "",
                                "Development Environment & Architecture:",
                                "Frontend Tech Stack:",
                                "• Vue.js 3 - Modern frontend framework",
                                "• Vuetify 2 - Material Design component library",
                                "• Pinia - Next generation state management",
                                "",
                                "Backend Tech Stack:",
                                "• Spring Boot - Main framework",
                                "• MyBatis-Plus - ORM framework",
                                "• Redis - Cache and queue",
                                "• MySQL - Data persistence",
                                "• Skywalking - Distributed tracing",
                                "• Elasticsearch - Logging and search",
                                "",
                                "Cloud Services:",
                                "• AWS ECS - Container service",
                                "• Git - Version control",
                                "",
                                "Technical Highlights:",
                                "1. System Architecture Upgrade:",
                                "   • Migrated from traditional JSP+Java to frontend-backend separation",
                                "   • Rebuilt frontend interface using Vue3+Vuetify2",
                                "   • Implemented modular UI design",
                                "",
                                "2. Core Features Implementation:",
                                "   • API services based on Ruoyi Plus framework",
                                "   • Comprehensive user permission system",
                                "   • Real-time logging and inventory change tracking",
                                "   • Smart shelf lighting control integration",
                                "",
                                "3. Performance Optimization & Monitoring:",
                                "   • Redis-based delayed queue task processing",
                                "   • Full-chain tracing using Skywalking+ES",
                                "   • Real-time performance monitoring and alerting",
                                "   • Distributed system performance optimization"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发与合作开发项目，对原有的JSP后台仓储服务进行现代化改造，打造新一代仓储管理系统。核心业务包括：",
                                "• 多仓储ERP后台服务集成",
                                "• 多租户用户体系架构",
                                "• 实时仓储货物追踪",
                                "• 智能化进出库灯架控制",
                                "• 全方位仓储数据分析",
                                "",
                                "开发环境架构：",
                                "前端技术栈：",
                                "• Vue.js 3 - 现代化前端框架",
                                "• Vuetify 2 - Material Design组件库",
                                "• Pinia - 新一代状态管理工具",
                                "",
                                "后端技术栈：",
                                "• Spring Boot - 主框架",
                                "• MyBatis-Plus - ORM框架",
                                "• Redis - 缓存与队列",
                                "• MySQL - 数据持久化",
                                "• Skywalking - 分布式追踪",
                                "• Elasticsearch - 日志与搜索",
                                "",
                                "云服务架构：",
                                "• AWS ECS - 容器服务",
                                "• Git - 版本控制",
                                "",
                                "技术亮点：",
                                "1. 系统架构升级：",
                                "   • 将传统JSP+Java架构升级为前后端分离架构",
                                "   • 采用Vue3+Vuetify2重构前端界面",
                                "   • 实现模块化的用户界面设计",
                                "",
                                "2. 核心功能实现：",
                                "   • 基于Ruoyi Plus框架的接口服务",
                                "   • 完善的用户权限体系",
                                "   • 实时日志服务与仓储变动追踪",
                                "   • 智能货架灯控制接口集成",
                                "",
                                "3. 性能优化与监控：",
                                "   • 基于Redis的延迟队列任务处理",
                                "   • 使用Skywalking+ES实现全链路追踪",
                                "   • 实时性能监控与告警机制",
                                "   • 分布式系统性能优化"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発と協力開発プロジェクトで、既存のJSPバックエンド倉庫サービスを最新化し、次世代倉庫管理システムを構築。主要業務：",
                                "• マルチ倉庫ERPバックエンドサービス統合",
                                "• マルチテナントユーザーシステムアーキテクチャ",
                                "• リアルタイム在庫追跡",
                                "• スマート入出庫照明制御",
                                "• 総合的な倉庫データ分析",
                                "",
                                "開発環境・アーキテクチャ：",
                                "フロントエンド技術スタック：",
                                "• Vue.js 3 - モダンフロントエンドフレームワーク",
                                "• Vuetify 2 - マテリアルデザインコンポーネントライブラリ",
                                "• Pinia - 次世代状態管理ツール",
                                "",
                                "バックエンド技術スタック：",
                                "• Spring Boot - メインフレームワーク",
                                "• MyBatis-Plus - ORMフレームワーク",
                                "• Redis - キャッシュとキュー",
                                "• MySQL - データ永続化",
                                "• Skywalking - 分散トレーシング",
                                "• Elasticsearch - ログと検索",
                                "",
                                "クラウドサービス：",
                                "• AWS ECS - コンテナサービス",
                                "• Git - バージョン管理",
                                "",
                                "技術的なハイライト：",
                                "1. システムアーキテクチャのアップグレード：",
                                "   • 従来のJSP+Javaアーキテクチャからフロントエンド・バックエンド分離へ移行",
                                "   • Vue3+Vuetify2によるフロントエンド再構築",
                                "   • モジュール化されたUI設計の実現",
                                "",
                                "2. コア機能の実装：",
                                "   • Ruoyi PlusフレームワークベースのAPIサービス",
                                "   • 包括的なユーザー権限システム",
                                "   • リアルタイムログと在庫変動追跡",
                                "   • スマート棚照明制御の統合",
                                "",
                                "3. パフォーマンス最適化と監視：",
                                "   • Redisベースの遅延キュータスク処理",
                                "   • Skywalking+ESによる全チェーン追跡",
                                "   • リアルタイムパフォーマンス監視とアラート",
                                "   • 分散システムのパフォーマンス最適化"
                            ]
                        },
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
                            "AWS ECS",
                            "Git"
                        ]
                    }
                ]
            },
            digitalStudio: {
                name: {
                    en: "Digital Design Studio - Java Developer",
                    zh: "成都数智设计工作室 - Java开发",
                    ja: "成都デジタルデインスタジオ - Java開発者"
                },
                period: "2020.07-2021.07",
                location: "Chengdu",
                description: {
                    en: "Participated in product requirement analysis, architecture design, coding, technical documentation writing and development work, responsible for backend service development",
                    zh: "参与公司产品的需求分析，架构设计，编码、技术文档编写等开发工作、负责后台服务开发",
                    ja: "製品の要件分析、アーキテクチャ設計、コーディング、技術文書作成などの開発作業に参加し、バックエンドサービスの開発を担当"
                },
                projects: [
                    {
                        title: {
                            en: "Second-hand Car Sales Service System",
                            zh: "品冠二手汽车销售服务系统",
                            ja: "中古車販売サービスシステム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive second-hand car sales service system including management backend system, API service, payment system, and customer service system",
                            zh: "完整的二手汽车销售服务系统，包含管理端后台系统、API服务、支付系统、客服系统",
                            ja: "管理バックエンドシステム、APIサービス、決済システム、カスタマーサービスシステムを含む総合的な中古車販売サービスシステム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "1. Frontend development of management backend system",
                                "2. Android App WebView hybrid development, this system is a second-hand car sales service system, including:",
                                "   • Management backend system",
                                "   • API services (registration, login, customer service, car product display, maintenance, sales appointment, sales evaluation)",
                                "   • Backend system (product management, user management, product service management, order management, payment management, third-party payment channel management, report statistics, customer service management, system configuration)",
                                "   • App functionality implemented through WebView shell",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Android SDK 29, Maven, Gradle, SVN",
                                "• Spring Boot, MyBatis-plus, Redis, Satoken",
                                "• MySQL, Lock4j, MinIO, Skywalking, Elasticsearch",
                                "Technical Responsibilities:",
                                "1. Responsible for management backend system service construction, technology selection, database design, development environment setup, and backend system service business function development",
                                "2. Introduced Satoken+Redis lightweight framework for permissions, Lock4j+Redis distributed lock for duplicate submission prevention, timer implementation for automatic sales allocation of customer appointments with SMS notifications and notification bar push",
                                "3. Backend integration of JPush client for group-oriented push functionality, introduced Skywalking for service performance monitoring, log collection, alerting, and implemented AOP-based log management",
                                "4. App-side WebView and frontend hybrid development, saving multi-end development costs, integrated common App functions (Alipay SDK, WeChat SDK, JPush SDK, OpenInstall SDK) for backend push notifications, payment initiation, parameterized installation, installation download statistics, WeChat sharing, map navigation"
                            ],
                            zh: [
                                "项目背景：",
                                "1. 管理端后台系统前端搭建以及业务实现",
                                "2. Android App WebView混合开发，该系统是二手汽车销售服务系统，该项目主要包含：",
                                "   • 管理端后台系统",
                                "   • API服务（注册、登录、客服、汽车商品展示、维修保养、销售预约、销售评价）",
                                "   • 后台系统（商品管理、用户管理、商品服务管理、订单管理、支付管理、第三方支付渠道管理、报表统计、客服管理、系统配置）",
                                "   • App使用WebView套壳网页实现App功能",
                                "开发环境架构：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技术负责：",
                                "1. 负责项目管理端后台系统服务搭建、技术选型、参与需求转化数据库表设计、开发环境搭建、后台系统服务业务功能开发实现",
                                "2. 引入Satoken+Redis轻量化框架实现权限、Lock4j+Redis分布式锁防重复提交、定时器实现客户预约自动销售分配自动短信通知自动通知栏推送",
                                "3. 后台集���极光推送客户端，实现群推定向推送功能，引入Skywalking实现服务性能监控、日志采集、告警，实现基于AOP的日志管理",
                                "4. App端WebView与前端混合开发，节约多端开发成本，集成常用App功能（支付宝SDK、微信SDK、极光SDK、OpenInstall SDK）实现后台推送手机消息、拉起支付、带参安装、安装下载统计、微信分享、地图导航"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "1. 管理バックエンドシステムのフロントエンド構築と業務実装",
                                "2. Android App WebViewハイブリッド開発、中古車販売サービスシステムとして、以下を含む：",
                                "   • 管理バックエンドシステム",
                                "   • APIサービス（登録、ログイン、カスタマーサービス、車両商品表示、メンテナンス、販売予約、販売評価）",
                                "   • バックエンドシステム（商品管理、ユーザー管理、商品サービス管理、注文管理、決済管理、第三者決済チャネル管理、レポート統計、カスタマーサービス管理、システム設定）",
                                "   • WebViewシェルを使用したアプリ機能の実装",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技術担当：",
                                "1. 管理バックエンドシステムサービスの構築、技術選定、要件変換データベース設計、開発環境構築、バックエンドシステムサービス機能開発を担当",
                                "2. Satoken+Redis軽量フレームワークによる権限管理、Lock4j+Redis分散ロックによる重複送信防止、タイマーによる顧客予約の自動販売割り当てとSMS通知、通知バープッシュの実装",
                                "3. バックエンドにJPushクライアントを統合してグループ指向プッシュ機能を実現、Skywalkingを導入してサービス性能監視、ログ収集、アラート、AOPベースのログ管理を実装",
                                "4. App側WebViewとフロントエンドのハイブリッド開発によるマルチエンド開発コストの削減、一般的なアプリ機能（Alipay SDK、WeChat SDK、JPush SDK、OpenInstall SDK）を統合してバックエンドプッシュ通知、決済起動、パラメータ付きインストール、インストールダウンロード統計、WeChat共有、地図ナビゲーションを実現"
                            ]
                        },
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
                ]
            },
            huawei: {
                name: {
                    en: "Huawei (Chengdu Research Institute) - Java Developer",
                    zh: "华为（成都研究所） - Java开发",
                    ja: "華為（成都研究所） - Java開発者"
                },
                period: "2016.12-2020.01",
                location: "Chengdu",
                description: {
                    en: "Participated in the development and maintenance of multiple important Huawei projects",
                    zh: "参与华为多个重要项目的开发和维护工作",
                    ja: "華為の複数の重要プロジェクトの開発とメンテナンスに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Huawei AIFlow Algorithm Training Platform",
                            zh: "华为AIFlow算法训练平台",
                            ja: "華為AIFlowアルゴリズム訓練プラットフォーム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Development of AIFlow algorithm training platform under Huawei 2012 Lab, implementing online training platform for machine learning and deep learning",
                            zh: "华为2012实验室下的AIFlow算法训练平台开发，实现机器学习和深度学习的在线训练平台",
                            ja: "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発、機械学習とディープラーニングのオンライン訓練プラットフォームを実現"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab. Main features include:",
                                "• Online algorithm editing with Jupyter for machine learning & deep learning",
                                "• Training resource (servers, GPU, CPU) application, approval, creation, execution, monitoring, and log retrieval",
                                "• Additional core services (data annotation service, data cleaning service, dataset retrieval service)",
                                "• Support for TensorFlow & Caffe framework computation",
                                "• Support for multi-machine multi-GPU task training",
                                "",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "",
                                "Technical Responsibilities:",
                                "1. Backend Deep Learning Management Implementation:",
                                "   • Task module with Redis delayed queue timer scanning for automatic task initiation",
                                "   • Training module supporting different systems (TensorFlow, Caffe) for template selection and training mode",
                                "   • Dataset module with MongoDB integration",
                                "   • One-click log batch import to Elasticsearch for quick retrieval",
                                "",
                                "2. Deep Learning Task Scheduling Service:",
                                "   • Thread pool multi-threading for task scheduling",
                                "   • Delayed task scheduling implementation",
                                "",
                                "3. Email Service Resource Approval:",
                                "   • MQ task message queue binding",
                                "   • Task message consumption and email dispatch based on type (deep learning, machine learning, multi-machine multi-GPU)",
                                "   • Email template-based notifications to relevant stakeholders"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，平台主要功能：",
                                "• 机械&深度学习jupter在线算法编辑",
                                "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监控、日志检索",
                                "• 包含其他的主要业务(数据标注服务、数据清洗服务、数据集检索服务)",
                                "• 支持可选TensorFlow&Caffe框架运算",
                                "• 支持多机多卡任务训练",
                                "",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "技术负责：",
                                "1. 后台深度学习管理功能实现：",
                                "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                                "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                                "   • 数据集模块",
                                "   • 一键运行日志批量导入es实现快速检索",
                                "",
                                "2. 实现深度学习任务调度服务：",
                                "   • 线程池多线程处理任务调度",
                                "   • 延迟任务调度实现",
                                "",
                                "3. 邮件服务审批资源：",
                                "   • 绑定mq任务消息队列",
                                "   • 消费任务消息根据类型（深度、机器、机多卡）根邮件模板发送邮件到相关负人"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発。主な機能：",
                                "• 機械学習とディープラーニングのJupyter オンインアルゴズム編集",
                                "• トレーニングリソース（サーバー、GPU、CPU）の申請、承認、作成、実行、監視、ログ検索",
                                "• その他の主要サービス（データアノテーションサービス、データクリーニングサービス、データセット検索サービス）",
                                "• TensorFlow & Caffeフレームワークの計算をサポート",
                                "• マルチマシン・マルチGPUタスクトレーニングをサポート",
                                "",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• Spring Cloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "術担当：",
                                "1. バックエンドディープラーニング管理機能の実装：",
                                "   • タスクモジュール（Redis遅延キュースキャンター自動タスク）",
                                "   • トレーニングモジュール（TensorFlow、Caffeなど異なるシステムのトレーニングテンプレート選択とトレーニングモード、MongoDBデータセットJSONの取得）",
                                "   • データセットモジュール",
                                "   • ワンクリックログ一括インポートとElasticsearchによる高速検索",
                                "",
                                "2. ディープラーニングタスクスケジューリングサービスの実装：",
                                "   • スレッドプールマルチスレッドによるタスクスケジューリング",
                                "   • 遅延タスクスケジューリングの実装",
                                "",
                                "3. メールサービスリソース承認：",
                                "   • MQタスクメッセージキューのバインド",
                                "   • タスクメッセージの消費とタイプ（ディープラーニング、機械学習、マルチマシン・マルチGPU）に基づく関係者へのメールテンプレート送信"
                            ]
                        },
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
                        title: {
                            en: "Huawei India Telecom BA Base Station System",
                            zh: "华为印度电信商BA基站系统",
                            ja: "華為インド通信事業者BA基地局システム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Base station management system built for Huawei's Indian telecom customer, managing and analyzing the operational status of equipment under Huawei operators",
                            zh: "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态",
                            ja: "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム、華為の通信事業者配下の機器運用状態を管理・統計"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Base station management system built for Huawei's Indian telecom customer, integrating inventory, maintenance, and personnel management for base station equipment.",
                                "Development Environment & Architecture:",
                                "• JDK1.7, Virtual Cloud Desktop, Maven, SVN",
                                "• Spring MVC, MyBatis, MQ, Redis",
                                "• JSP, Bootstrap",
                                "Technical Responsibilities:",
                                "1. Backend module implementation - Base station data aggregation timer for batch JSON data import, AOP encryption/decryption",
                                "2. Performance optimization for online issues, slow SQL query optimization, daily bug fixes",
                                "3. Database sharding and partial code refactoring"
                            ],
                            zh: [
                                "项目背景：",
                                "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态，集库存、修理、责任人一体化统计管理基站设备。",
                                "开发环境架构：",
                                "• JDK1.7、虚拟云桌面、Maven、SVN",
                                "• SpringMVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技术负责：",
                                "1. 后台新增模块实现-基站数据信息汇总定时器拉取json数据批量入库，aop加解密",
                                "2. 处理线上性能故障进行性能调优、处理慢sql、修改日常bug",
                                "3. 数据库分表，部分代码重构"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム。在庫、修理、責任者の一体化統計管理を含む基地局設備の運用状態を管理・統計。",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.7、仮想クラウドデスクトップ、Maven、SVN",
                                "• Spring MVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技術担当：",
                                "1. バックエンド新規モジュール実装 - 基地局データ情報集計タイマーによるJSONデータ一括インポート、AOP暗号化/復号化",
                                "2. オンラインパフォーマンス問題の最適化、低速SQLクエリの最適化、日常的なバグ修正",
                                "3. データベースシャーディングと部分的なコードリファクタリング"
                            ]
                        },
                        technologies: [
                            "Spring MVC",
                            "MyBatis",
                            "Redis",
                            "RabbitMQ",
                            "JSP",
                            "Bootstrap",
                            "Maven",
                            "SVN"
                        ]
                    }
                ]
            },
            gameCompany: {
                name: {
                    en: "2K Games - QA Engineer",
                    zh: "成都迁之游（2K GAME）- QA测试",
                    ja: "2K GAME - QAエンジニア"
                },
                period: "2016.08-2016.09",
                location: "Chengdu",
                description: {
                    en: "Participated in 2K GAME testing department, responsible for testing multiple well-known games",
                    zh: "参与2K GAME游戏测试部门，负责多款知名游戏的测试工作",
                    ja: "2K GAMEのテスト部門に参加し、複数の有名ゲームのテスト作業を担当"
                },
                projects: [
                    {
                        title: {
                            en: "2K Games Testing Projects",
                            zh: "2K游戏测试项目",
                            ja: "2Kゲームテストプロジェクト"
                        },
                        type: {
                            en: "Game Testing",
                            zh: "游戏测试",
                            ja: "ゲームテスト"
                        },
                        description: {
                            en: "Participated in testing multiple AAA titles including Mafia II, Civilization Mobile, NBA 2K series, and Borderlands",
                            zh: "参与多款知名游戏的测试工作，包括黑手党2、文明手游、NBA 2K系列、无主之地等",
                            ja: "マフィアII、シヴィライゼーションモバイル、NBA 2Kシリーズ、ボーダーランズなど、複数の有名ゲームのテストに参加"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Member of 2K GAME testing department, participated in testing multiple well-known games",
                                "• Mafia II",
                                "• Civilization Mobile",
                                "• NBA 2K Series",
                                "• Borderlands",
                                "Main Responsibilities:",
                                "1. Functional testing and bug feedback",
                                "2. Game performance testing",
                                "3. User experience evaluation",
                                "4. Test report writing"
                            ],
                            zh: [
                                "项目背景：",
                                "作为2K GAME测试部门的一员，参与多款知名游戏的测试工作",
                                "• 黑手党2",
                                "• 文明手游",
                                "• NBA 2K系列",
                                "• 无主之地",
                                "主要职责：",
                                "1. 功能测试与bug反馈",
                                "2. 游戏性能测试",
                                "3. 用户体验评估",
                                "4. 测试报告编写"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "2K GAMEテスト部門のメンバーとして、複数の有名ゲームのテストに参加",
                                "• マフィアII",
                                "• シヴィライゼーョンモバイル",
                                "• NBA 2Kシリー",
                                "• ボーダーランズ",
                                "主な役割：",
                                "1. 機能テストとバグフィードバック",
                                "2. ゲーム性能テスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ]
                        },
                        technologies: [
                            "Game Testing",
                            "Bug Tracking",
                            "Performance Testing",
                            "User Experience Testing"
                        ]
                    }
                ]
            },
            microlight: {
                name: {
                    en: "Microlight Technology - Layout Engineer",
                    zh: "成都微光集电科技 - 版图工程师",
                    ja: "成都マイクロライトテクノロジー - レイアウトエンジニア"
                },
                period: "2015.08-2016.08",
                location: "Chengdu",
                description: {
                    en: "Participated in analog layout design and verification of multiple chips",
                    zh: "参与多个芯片的模拟版图设计与验证工作",
                    ja: "複数のチップのアナログレイアウト設計と検証作業に参加"
                },
                projects: [
                    {
                        title: {
                            en: "Chip Layout Design Projects",
                            zh: "芯片版图设计项目",
                            ja: "チップレイアウト設計プロジェクト"
                        },
                        type: {
                            en: "IC Layout Design",
                            zh: "集成电路版图设计",
                            ja: "集積回路レイアウト設計"
                        },
                        description: {
                            en: "Multiple chip layout design and verification projects based on HLMC 40nm/55nm process",
                            zh: "基于华力微电子40nm/55nm工艺的多个芯片版图设计与验证项目",
                            ja: "HLMC 40nm/55nmプロセスに基づく複数のチップレイアウト設計と検証プロジェクト"
                        },
                        details: {
                            en: [
                                "Project Content:",
                                "1. Shanghai Huali Microelectronics 40nm Process PR Digital Cell Library Analog Layout Design",
                                "2. Beidou Xiaolajiao Mobile Phone Fingerprint Chip Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout design and verification of fingerprint chip oscillator module",
                                "   • Conducted circuit simulation and performance verification",
                                "   • Ensured design meets fingerprint recognition performance requirements",
                                "3. HD Camera Sensor Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout implementation of 16MP/4MP/2MP pixel sensors",
                                "   • Conducted DRC/LVS verification and parameter extraction",
                                "   • Ensured design meets image capture performance metrics"
                            ],
                            zh: [
                                "项目内容：",
                                "1. 上海华力微电子40nm工艺PR数字单元库模拟版图设计",
                                "2. 北斗小辣椒手机指纹芯片项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责指纹芯片振荡器模块的模拟版图设计与验证",
                                "   • 进行电路仿真和性能验证",
                                "   • 确保设计满足指纹识别的性能要求",
                                "3. 高清摄像头传感器项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责1600w/400w/200w像素传感器的模拟版图实现",
                                "   • 进行DRC/LVS验证和参数提取",
                                "   • 确保设计满足图像采集的性能指标"
                            ],
                            ja: [
                                "プロジェクト内容：",
                                "1. 上海華力マイクロエレクトロニクス40nmプロセスPRデジタルセルライブラリアナログレイアウト設計",
                                "2. 北斗シャオラージャオ携帯電話指紋チッププロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 指紋チップ発振器モジュールのアナログレイアウト設計と検証を担当",
                                "   • 回路シミュレーションと性能検証を実施",
                                "   • 指紋認識の性能要件を満たす設計を確保",
                                "3. HDカメラセンサープロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 1600万/400万/200万画素センサーのアナログレイアウト実装を担当",
                                "   • DRC/LVS検証とパラメータ抽出を実施",
                                "   • 画像キャプチャの性能指標を満たす設計を確保"
                            ]
                        },
                        technologies: [
                            "Cadence Virtuoso",
                            "55nm工艺",
                            "40nm工艺",
                            "模拟版图设计",
                            "DRC/LVS",
                            "电路仿真"
                        ]
                    }
                ]
            },
            university: {
                name: {
                    en: "University of Electronic Science and Technology of China, Chengdu College",
                    zh: "电子科技大学成都学院",
                    ja: "電子科技大学成都学院"
                },
                period: "2011.09-2015.08",
                location: "Chengdu",
                description: {
                    en: "Bachelor's Degree in Electronic Science and Technology (Microelectronics)",
                    zh: "电子科学与技术（微电子）学士学位",
                    ja: "電子科学技術（マイクロエクトロニクス）学士"
                }
            },
            semiconductor: {
                name: {
                    en: "Semiconductor Company - Analog Circuit Engineer",
                    zh: "成都索成易半导体 - 模拟电路工程师",
                    ja: "成都半導体 - アナログ回路エンジニア"
                },
                period: "2014.03-2014.11",
                location: "Chengdu",
                description: {
                    en: "Participated in the implementation, verification and simulation of analog circuit power module for Apple camera sensor (Sony IMX series sensor) under Fujitsu 50nm process",
                    zh: "参与富士通50nm工下苹果摄像传感器（索尼IMX系列传感器）模拟电路电源模块实现、电路验证与仿真",
                    ja: "富士通50nmプロセスでのAppleカメラセンサー（ソニーIMXシリーズセンサー）のアナログ回路電源モジュールの実装、検証、シミュレーションに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Sony IMX220 Camera Sensor Power Module",
                            zh: "索尼IMX220摄像传感器芯片电源模块",
                            ja: "ソニーIMX220カメラセンサー電源モジュール"
                        },
                        type: {
                            en: "Analog Circuit Design",
                            zh: "模拟电路设计",
                            ja: "アナログ回路設計"
                        },
                        description: {
                            en: "Power management module design and verification for Sony IMX220 camera sensor (iPhone 6 12MP) based on Fujitsu 50nm process",
                            zh: "基于富士通50nm工艺，为索尼IMX220摄像传感器芯片（iPhone 6摄像头1200W）进行电源管理模块的设计与验证",
                            ja: "富士通50nmプロセスに基づき、ソニーIMX220カメラセンサーチップ（iPhone 6カメラ1200万画素）の電源管理モジュールの設計と検証"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab. Main features include:",
                                "• Online algorithm editing with Jupyter for machine learning & deep learning",
                                "• Training resource (servers, GPU, CPU) application, approval, creation, execution, monitoring, and log retrieval",
                                "• Additional core services (data annotation service, data cleaning service, dataset retrieval service)",
                                "• Support for TensorFlow & Caffe framework computation",
                                "• Support for multi-machine multi-GPU task training",
                                "",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "",
                                "Technical Responsibilities:",
                                "1. Backend Deep Learning Management Implementation:",
                                "   • Task module with Redis delayed queue timer scanning for automatic task initiation",
                                "   • Training module supporting different systems (TensorFlow, Caffe) for template selection and training mode",
                                "   • Dataset module with MongoDB integration",
                                "   • One-click log batch import to Elasticsearch for quick retrieval",
                                "",
                                "2. Deep Learning Task Scheduling Service:",
                                "   • Thread pool multi-threading for task scheduling",
                                "   • Delayed task scheduling implementation",
                                "",
                                "3. Email Service Resource Approval:",
                                "   • MQ task message queue binding",
                                "   • Task message consumption and email dispatch based on type (deep learning, machine learning, multi-machine multi-GPU)",
                                "   • Email template-based notifications to relevant stakeholders"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，平台主要功能：",
                                "• 机械&深度学习jupter在线算法编辑",
                                "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监控、日志检索",
                                "• 包含其他的主要业务(数据标注服务、数据清洗服务、数据集检索服务)",
                                "• 支持可选TensorFlow&Caffe框架运算",
                                "• 支持多机多卡任务训练",
                                "",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "技术负责：",
                                "1. 后台深度学习管理功能实现：",
                                "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                                "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                                "   • 数据集模块",
                                "   • 一键运行日志批量导入es实现快速检索",
                                "",
                                "2. 实现深度学习任务调度服务：",
                                "   • 线程池多线程处理任务调度",
                                "   • 延迟任务调度实现",
                                "",
                                "3. 邮件服务审批资源：",
                                "   • 绑定mq任务消息队列",
                                "   • 消费任务消息根据类型（深度、机器、多机多卡）根据邮件模板发送邮件到相关负责人"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発。主な機能：",
                                "• 機械学習とディープラーニングのJupyter オンラインアルゴリズム編集",
                                "• トレーニングリソース（サーバー、GPU、CPU）の申請、承認、作成、実行、監視、ログ検索",
                                "• その他の主要サービス（データアノテーションサービス、データクリーニングサービス、データセット検索サービス）",
                                "• TensorFlow & Caffeフレームワークの計算をサポート",
                                "• マルチマシン・マルチGPUタスクトレーニングをサポート",
                                "",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• Spring Cloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "術担当：",
                                "1. バックエンドディープラーニング管理機能の実装：",
                                "   • タスクモジュール（Redis遅延キュースキャンター自動タスク）",
                                "   • トレーニングモジュール（TensorFlow、Caffeなど異なるシステムのトレーニングテンプレート選択とトレーニングモード、MongoDBデータセットJSONの取得）",
                                "   • データセットモジュール",
                                "   • ワンクリックログ一括インポートとElasticsearchによる高速検索",
                                "",
                                "2. ディープラーニングタスクスケジューリングサービスの実装：",
                                "   • スレッドプールマルチスレッドによるタスクスケジューリング",
                                "   • 遅延タスクスケジューリングの実装",
                                "",
                                "3. メールサービスリソース承認：",
                                "   • MQタスクメッセージキューのバインド",
                                "   • タスクメッセージの消費とタイプ（ディープラーニング、機械学習、マルチマシン・マルチGPU）に基づく関係者へのメールテンプレート送信"
                            ]
                        },
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
                        title: {
                            en: "Huawei India Telecom BA Base Station System",
                            zh: "华为印度电信商BA基站系统",
                            ja: "華為インド通信事業者BA基地局システム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Base station management system built for Huawei's Indian telecom customer, managing and analyzing the operational status of equipment under Huawei operators",
                            zh: "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态",
                            ja: "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム、華為の通信事業者配下の機器運用状態を管理・統計"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Base station management system built for Huawei's Indian telecom customer, integrating inventory, maintenance, and personnel management for base station equipment.",
                                "Development Environment & Architecture:",
                                "• JDK1.7, Virtual Cloud Desktop, Maven, SVN",
                                "• Spring MVC, MyBatis, MQ, Redis",
                                "• JSP, Bootstrap",
                                "Technical Responsibilities:",
                                "1. Backend module implementation - Base station data aggregation timer for batch JSON data import, AOP encryption/decryption",
                                "2. Performance optimization for online issues, slow SQL query optimization, daily bug fixes",
                                "3. Database sharding and partial code refactoring"
                            ],
                            zh: [
                                "项目背景：",
                                "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态，集库存、修理、责任人一体化统计管理基站设备。",
                                "开发环境架构：",
                                "• JDK1.7、虚拟云桌面、Maven、SVN",
                                "• SpringMVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技术负责：",
                                "1. 后台新增模块实现-基站数据信息汇总定时器拉取json数据批量入库，aop加解密",
                                "2. 处理线上性能故障进行性能调优、处理慢sql、修改日常bug",
                                "3. 数据库分表，部分代码重构"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム。在庫、修理、責任者の一体化統計管理を含む基地局設備の運用状態を管理・統計。",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.7、仮想クラウドデスクトップ、Maven、SVN",
                                "• Spring MVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技術担当：",
                                "1. バックエンド新規モジュール実装 - 基地局データ情報集計タイマーによるJSONデータ一括インポート、AOP暗号化/復号化",
                                "2. オンラインパフォーマンス問題の最適化、低速SQLクエリの最適化、日常的なバグ修正",
                                "3. データベースシャーディングと部分的なコードリファクタリング"
                            ]
                        },
                        technologies: [
                            "Spring MVC",
                            "MyBatis",
                            "Redis",
                            "RabbitMQ",
                            "JSP",
                            "Bootstrap",
                            "Maven",
                            "SVN"
                        ]
                    }
                ]
            }
        }
    },
    zh: {
        companies: {
            softwareCompany: {
                name: {
                    en: "Software Developer",
                    zh: "软件开发工程师",
                    ja: "ソフトウェア開発者"
                },
                period: "2021.07-至今",
                location: "成都",
                description: {
                    en: "Full stack development engineer, responsible for architecture design and development of multiple projects",
                    zh: "全栈开发工程师，负责多个项目的架构设计和开发",
                    ja: "フルスタック開発エンジニアとして、複数のプロジェクトのアーキテクチャ設計と開発を担当"
                },
                projects: [
                    {
                        title: {
                            en: "Enterprise Information Management System",
                            zh: "铭泰中弘企业信息管理系统",
                            ja: "銘泰中弘企業情報管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Enterprise information system upgrade, building information backend system, mainly for personnel organization structure, project report management, project audit process, and ODS file generation with old system docking",
                            zh: "企业信息化升级，搭建信息化后台系统，主要业务-人员组织架构、项目报表管理、项目审核流程、与老系统对接生成ODS文",
                            ja: "企業情報システムのアップグレード、情報バックエンドシステムの構築、主に人事組織構造、プロジェクトレポート管理、プロジェクト監査プロセス、旧システムとの連携によるODSファイル生成"
                        },
                        details: {
                            en: [
                                "Project Role: Backend system construction, database design, business implementation",
                                "Project Background:",
                                "Enterprise information system upgrade, building information backend system for personnel organization structure, project report management, project audit process, and ODS file generation with legacy system integration",
                                "Project Architecture:",
                                "• Ruoyi-plus secondary development",
                                "• Spring Boot monolithic service",
                                "• Redis message queue",
                                "• MySQL storage",
                                "• Vue.js 2 frontend",
                                "• Element UI",
                                "Technical Responsibilities:",
                                "1. Project architecture design, database schema design, requirement analysis and business implementation"
                            ],
                            zh: [
                                "项目角色：后台系统搭建 数据建表 业务实现",
                                "项目背景：",
                                "企业信息化升级，搭建信息化后台系统，主要业务-人员组织架构 项目报表管理项目审核流程 与老系统对接生成ODS文件",
                                "项目架构：",
                                "• ruoyi-plus二开项目",
                                "• springboot单体",
                                "• redis消息队列",
                                "• mysql存储",
                                "• vue2前端页面",
                                "• elementui",
                                "技术负责：",
                                "1. 项目架构设计 数据库建表 需求转业务 业务实现"
                            ],
                            ja: [
                                "プロジェクト役割：バックエンドシステム構築、データベース設計、業務実装",
                                "プロジェクト背景：",
                                "企業情報システムのアップグレード、情報バックエンドシステムの構築、主に人事組織構造、プロジェクトレポート管理、プロジェクト監査プロセス、レガシーシステムとの統合によるODSファイル生成のための情報バックエンドシステムの構築",
                                "プロジェクトアーキテクチャ：",
                                "• Ruoyi-plusの二次開発",
                                "• Spring Bootモノリシックサービス",
                                "• Redisメッセージキュー",
                                "• MySQLストレージ",
                                "• Vue.js 2フロントエンド",
                                "• Element UI",
                                "技術担当：",
                                "1. プロジェクトアーキテクチャ設計、データベーススキーマ設計、要件分析、業務実装"
                            ]
                        },
                        technologies: [
                            "Spring Boot",
                            "Redis",
                            "MySQL",
                            "Vue.js 2",
                            "Element UI",
                            "Ruoyi Plus"
                        ]
                    },
                    {
                        title: {
                            en: "Second-hand Mobile Phone Trading Platform",
                            zh: "博弈优品闲置新生二手批发电商小程序",
                            ja: "中古携帯電話取引プラットフォーム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A B2B&B2C marketplace project focusing on second-hand mobile phone sales. Core business includes second-hand wholesale, recycling quotation, free market, B2C mall integration, quality inspection management, and ERP",
                            zh: "该项目为2B&2C商城项目主营二手手机销售，核心业务二批发、回收报价、自由市场、2C嫁接商城、质检管理、ERP",
                            ja: "B2B&B2Cマーケットプレイスプロジェクトで、中古携帯電話販売に焦点を当てています。主要業務は中古卸売、リサイクル見積もり、フリーマーケット、B2Cモール統合、品質検査管理、ERPを含みます"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "A B2B&B2C marketplace project focusing on second-hand mobile phone sales. The main technology is based on uniapp unicloud cloud serverLess multi-end application development, php erp inventory backend and order interface payment interface service, as well as third-party interface logistics warranty information docking java interface service",
                                "Development Environment & Architecture:",
                                "• Uniapp unicloud mongodb elasticsearch pinia redis",
                                "• unicloud cloud functions uniadmin vantUI NVUI",
                                "• Java interface service based on ruoyi plus",
                                "Technical Responsibilities:",
                                "1. Responsible for multi-end technical implementation, technology selection, database design, development environment setup, server setup, and quality inspection backend system service development",
                                "2. Using unicloud suite to implement multi-end login (WeChat, SMS, password), unipay2 payment, unimap map, uni multi-end statistics, uni-id unified user system, uni-im customer service and unipush app push notifications",
                                "3. Using cloud functions and cloud objects for full-stack service integration, MongoDB-based model data retrieval and Alibaba Cloud es serverLess inventory search",
                                "4. Java integration with JD Logistics for pre-order cloud printing and logistics push",
                                "5. Frontend poster design, custom camera, QR code sharing, scanning, Bluetooth printer connection, interceptor-based configurable permissions, multi-homepage design, multi-tabbar design, map point selection, trajectory and positioning implementation"
                            ],
                            zh: [
                                "项目背景：",
                                "该项目为2B&2C商城项目主营二手手机销售，核心业务二手批发 回收报价 自由市场 2C嫁接商城 质检管理 erp；主要的技术是基于uniapp unicloud云serverLess开发多端应用，php erp库存后台以及订单接口支付接口服务，以及三方接口物流 保修信息对接 java接口服务",
                                "开发环境架构：",
                                "• Uniapp unicloud mongdb elasticsearch pinia redis",
                                "• unicloud云函数对象 uniadmin vantUI NVUI",
                                "• 基于若依plus的java接口服务",
                                "技术负责：",
                                "1. 负责项目多端下技术实现、技术选型、参与需求转化数据库表设计、开发环境搭建、服务器搭建、质检后台系统服务业务功能开发实现",
                                "2. 使用unicloud全家桶实现多端登录（微信 短信 密码等登录），unipay2支付 unimap地图 uni多端统计 uni-id统一用户体系，uni-im客服以及unipush app端推送，使用云函数云对象一套系统集成前后端全栈服务，基于MongoDB的型号数据检索以及阿里云es serverLess服务存检索",
                                "3. java对接京东物流 现预单下单打印物流推送",
                                "4. 前端海报设计 自定义相机 二维码分享 扫码 连接蓝牙打印机 基于拦截器的可配置权限 多首页设计 多tabbar设计 地图选点 轨迹 定位实现"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "B2B&B2Cマーケットプレイスプロジェクトで、中古携帯電話販売を主要業務とし、中古卸売、リサイクル見積もり、フリーマーケット、B2Cモール統合、品質検査管理、ERPなどの核心業務を含む。主な技術はuniapp unicloudクラウドserverLessによるマルチエンドアプリケーション開発、php erpインベントリバックエンドと注文インターフェース決済インターフェースサービス、および第三者物流インターフェース保証情報連携javaインターフェースサービス",
                                "開発環境・アーキテクチャ：",
                                "• Uniapp unicloud mongodb elasticsearch pinia redis",
                                "• unicloudクラウド関数オブジェクト uniadmin vantUI NVUI",
                                "• Ruoyi plusベースのjavaインターフェースサービス",
                                "技術担当：",
                                "1. マルチエンド技術実装、技術選定、要件変換データベース設計、開発環境構築、サーバー構築、品質検査バックエンドシステムサービス機能開発を担当",
                                "2. unicloudスイートを使用してマルチエンドログイン（WeChat、SMS、パスワード）、unipay2決済、unimapマップ、uniマルチエンド統計、uni-id統一ユーザーシステム、uni-imカスタマーサービスおよびunipush appプッシュ通知を実装",
                                "3. クラウド関数とクラウドオブジェクトを使用したフルスタックサービス統合、MongoDBベースのモデルデータ検索とAlibaba Cloud es serverLessインベントリ検索",
                                "4. JD物流との連携による事前注文クラウド印刷と物流プッシュの実装",
                                "5. フロントエンドポスターデザイン、カスタムカメラ、QRコード共有、スキャン、Bluetoothプリンター接続、インターセプターベースの設定可能な権限、マルチホームページデザイン、マルチタブバーデザイン、マップポイント選択、軌跡と位置情報の実装"
                            ]
                        },
                        technologies: [
                            "Uniapp",
                            "UniCloud",
                            "MongoDB",
                            "Elasticsearch",
                            "Pinia",
                            "Redis",
                            "Java",
                            "VantUI",
                            "NVUI"
                        ]
                    },
                    {
                        title: {
                            en: "Knight Delivery Mini Program",
                            zh: "骑士派小程序",
                            ja: "ナイトデリバリーミニプログラム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Remote development, full-stack development, independent development, WeChat mini program that can be packaged as Android app, with 4 ends including user end and rider end",
                            zh: "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                            ja: "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development, full-stack development, independent development of a WeChat mini program that can be packaged as an Android app, with 4 endpoints including user end and rider end",
                                "Development Environment & Architecture:",
                                "• JDK1.8, GitLab",
                                "• Spring Boot, MyBatis",
                                "• Redis, Vue.js 3, Uniapp, Vant",
                                "• Docker, MinIO",
                                "Technical Responsibilities:",
                                "1. Developed mini program frontend using Uniapp, backend services based on Ruoyi Plus framework, implementing multi-tenant user system, Aliyun SMS login, WeChat and Alipay payment integration, Redis-based delayed queue subscription pipeline for automatic order dispatch based on location and timeout payment order processing (location and timeout anomaly penalty calculation), using Redisson locks for concurrent order grabbing",
                                "2. Implemented built-in Tencent Map navigation with point marking, point selection, and route planning, sharing posters, subscription template messages, rider order grabbing hall, backend Vue.js 3 + Element UI implementation of user system, order management, website management, content management, data statistics with Excel import/export"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                                "开发环境架构：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技术负责：",
                                "1. 使用Uniapp开发小程序前端，后端基于若依plus的接口服务与后台服务，主要实现多租户的用户体系，阿里云短信登录，对接微信支付宝支付，基于Redis延迟队列订阅管道以及定位的实现区域自动派单以及超时支付订单处理 罚单计算（位置异常超时异常），Redission锁解决抢单并发",
                                "2. Uniapp实现内置腾讯地图导航 描点 选点 路线规划，分享海报，订阅模板消息、骑手端抢单大厅，后台Vue.js 3 + Element UI实现用户体系，订单管理，网站管理，内容管理，数据统计Excel导入导出等"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技術担当：",
                                "1. Uniappを使用してミニプログラムのフロントエンド開発、Ruoyi Plusフレームワークに基づくバックエンドサービス、マルチテナントユーザーシステム、Aliyun SMS認証、WeChatとAlipay決済連携、Redis遅延キューサブスクリプションパイプラインによる位置情報に基づく自動配車と支払いタイムアウト処理（位置異常タイムアウト異常のペナルティ計算）、Redissonロックによる同時注文処理の実装",
                                "2. 腾讯地図ナビゲーションの組み込み実装（ポイントマーキング、ポイント選択、ルート計画）、ポスター共有、サブスクリプションテンプレートメッセージ、ライダー注文受付ホール、バックエンドVue.js 3 + Element UIによるユーザーシステム、注文管理、ウェブサイト管理、コンテンツ管理、データ統計のExcelインポート/エクスポート機能の実装"
                            ]
                        },
                        technologies: [
                            "Uniapp",
                            "Vue.js 3",
                            "Spring Boot",
                            "MyBatis",
                            "Redis",
                            "Docker",
                            "Element UI",
                            "Vant",
                            "MinIO"
                        ]
                    },
                    {
                        title: {
                            en: "Rikiyun Corporation Warehouse Management System",
                            zh: "力运株式会社仓储管理系统",
                            ja: "力運株式会社倉庫管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive warehouse management system with multi-warehouse ERP backend services, featuring multi-tenant architecture, inventory tracking, and automated warehouse lighting control",
                            zh: "全面的仓储管理系统，实现多仓储ERP后台服务，包含多用户体系、仓储货物追踪、进出库灯架控制等核心功能",
                            ja: "マルチ倉庫ERPバックエンドサービス、マルチテナントアーキテクチャ、在庫追跡、自動倉庫照明制御を備えた総合的な倉庫管理システム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development and collaborative project to modernize existing JSP backend warehouse service. Core business includes:",
                                "• Multi-warehouse ERP backend service integration",
                                "• Multi-tenant user system architecture",
                                "• Real-time inventory tracking",
                                "• Smart warehouse lighting control",
                                "• Comprehensive warehouse data analytics",
                                "",
                                "Development Environment & Architecture:",
                                "Frontend Tech Stack:",
                                "• Vue.js 3 - Modern frontend framework",
                                "• Vuetify 2 - Material Design component library",
                                "• Pinia - Next generation state management",
                                "",
                                "Backend Tech Stack:",
                                "• Spring Boot - Main framework",
                                "• MyBatis-Plus - ORM framework",
                                "• Redis - Cache and queue",
                                "• MySQL - Data persistence",
                                "• Skywalking - Distributed tracing",
                                "• Elasticsearch - Logging and search",
                                "",
                                "Cloud Services:",
                                "• AWS ECS - Container service",
                                "• Git - Version control",
                                "",
                                "Technical Highlights:",
                                "1. System Architecture Upgrade:",
                                "   • Migrated from traditional JSP+Java to frontend-backend separation",
                                "   • Rebuilt frontend interface using Vue3+Vuetify2",
                                "   • Implemented modular UI design",
                                "",
                                "2. Core Features Implementation:",
                                "   • API services based on Ruoyi Plus framework",
                                "   • Comprehensive user permission system",
                                "   • Real-time logging and inventory change tracking",
                                "   • Smart shelf lighting control integration",
                                "",
                                "3. Performance Optimization & Monitoring:",
                                "   • Redis-based delayed queue task processing",
                                "   • Full-chain tracing using Skywalking+ES",
                                "   • Real-time performance monitoring and alerting",
                                "   • Distributed system performance optimization"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发与合作开发项目，对原有的JSP后台仓储服务进行现代化改造，打造新一代仓储管理系统。核心业务包括：",
                                "• 多仓储ERP后台服务集成",
                                "• 多租户用户体系架构",
                                "• 实时仓储货物追踪",
                                "• 智能化进出库灯架控制",
                                "• 全方位仓储数据分析",
                                "",
                                "开发环境架构：",
                                "前端技术栈：",
                                "• Vue.js 3 - 现代化前端框架",
                                "• Vuetify 2 - Material Design组件库",
                                "• Pinia - 新一代状态管理工具",
                                "",
                                "后端技术栈：",
                                "• Spring Boot - 主框架",
                                "• MyBatis-Plus - ORM框架",
                                "• Redis - 缓存与队列",
                                "• MySQL - 数据持久化",
                                "• Skywalking - 分布式追踪",
                                "• Elasticsearch - 日志与搜索",
                                "",
                                "云服务架构：",
                                "• AWS ECS - 容器服务",
                                "• Git - 版本控制",
                                "",
                                "技术亮点：",
                                "1. 系统架构升级：",
                                "   • 将传统JSP+Java架构升级为前后端分离架构",
                                "   • 采用Vue3+Vuetify2重构前端界面",
                                "   • 实现模块化的用户界面设计",
                                "",
                                "2. 核心功能实现：",
                                "   • 基于Ruoyi Plus框架的接口服务",
                                "   • 完善的用户权限体系",
                                "   • 实时日志服务与仓储变动追踪",
                                "   • 智能货架灯控制接口集成",
                                "",
                                "3. 性能优化与监控：",
                                "   • 基于Redis的延迟队列任务处理",
                                "   • 使用Skywalking+ES实现全链路追踪",
                                "   • 实时性能监控与告警机制",
                                "   • 分布式系统性能优化"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発と協力開発プロジェクトで、既存のJSPバックエンド倉庫サービスを最新化し、次世代倉庫管理システムを構築。主要業務：",
                                "• マルチ倉庫ERPバックエンドサービス統合",
                                "• マルチテナントユーザーシステムアーキテクチャ",
                                "• リアルタイム在庫追跡",
                                "• スマート入出庫照明制御",
                                "• 総合的な倉庫データ分析",
                                "",
                                "開発環境・アーキテクチャ：",
                                "フロントエンド技術スタック：",
                                "• Vue.js 3 - モダンフロントエンドフレームワーク",
                                "• Vuetify 2 - マテリアルデザインコンポーネントライブラリ",
                                "• Pinia - 次世代状態管理ツール",
                                "",
                                "バックエンド技術スタック：",
                                "• Spring Boot - メインフレームワーク",
                                "• MyBatis-Plus - ORMフレームワーク",
                                "• Redis - キャッシュとキュー",
                                "• MySQL - データ永続化",
                                "• Skywalking - 分散トレーシング",
                                "• Elasticsearch - ログと検索",
                                "",
                                "クラウドサービス：",
                                "• AWS ECS - コンテナサービス",
                                "• Git - バージョン管理",
                                "",
                                "技術的なハイライト：",
                                "1. システムアーキテクチャのアップグレード：",
                                "   • 従来のJSP+Javaアーキテクチャからフロントエンド・バックエンド分離へ移行",
                                "   • Vue3+Vuetify2によるフロントエンド再構築",
                                "   • モジュール化されたUI設計の実現",
                                "",
                                "2. コア機能の実装：",
                                "   • Ruoyi PlusフレームワークベースのAPIサービス",
                                "   • 包括的なユーザー権限システム",
                                "   • リアルタイムログと在庫変動追跡",
                                "   • スマート棚照明制御の統合",
                                "",
                                "3. パフォーマンス最適化と監視：",
                                "   • Redisベースの遅延キュータスク処理",
                                "   • Skywalking+ESによる全チェーン追跡",
                                "   • リアルタイムパフォーマンス監視とアラート",
                                "   • 分散システムのパフォーマンス最適化"
                            ]
                        },
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
                            "AWS ECS",
                            "Git"
                        ]
                    }
                ]
            },
            digitalStudio: {
                name: {
                    en: "Chengdu Digital Studio - Java Developer",
                    zh: "成都数智设计工作室 - Java开发",
                    ja: "成都デジタルスタジオ - Java開発者"
                },
                period: "2020.07-2021.07",
                location: "Chengdu",
                description: {
                    en: "Participated in product requirement analysis, architecture design, coding, technical documentation and backend service development",
                    zh: "参与公司产品的需求分析，架构设计，编码、技术文档编写等开发工作、负责后台服务开发",
                    ja: "製品要件分析、アーキテクチャ設計、コーディング、技術文書作成、バックエンドサービス開発に参加"
                },
                projects: [
                    {
                        title: {
                            en: "Second-hand Car Sales Service System",
                            zh: "品冠二手汽车销售服务系统",
                            ja: "中古車販売サービスシステム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive second-hand car sales service system including management backend system, API service, payment system, and customer service system",
                            zh: "完整的二手汽车销售服务系统，包含管理端后台系统、API服务、支付系统、客服系统",
                            ja: "管理バックエンドシステム、APIサービス、決済システム、カスタマーサービスシステムを含む総合的な中古車販売サービスシステム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "1. Frontend development of management backend system",
                                "2. Android App WebView hybrid development, this system is a second-hand car sales service system, including:",
                                "   • Management backend system",
                                "   • API services (registration, login, customer service, car product display, maintenance, sales appointment, sales evaluation)",
                                "   • Backend system (product management, user management, product service management, order management, payment management, third-party payment channel management, report statistics, customer service management, system configuration)",
                                "   • App functionality implemented through WebView shell",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Android SDK 29, Maven, Gradle, SVN",
                                "• Spring Boot, MyBatis-plus, Redis, Satoken",
                                "• MySQL, Lock4j, MinIO, Skywalking, Elasticsearch",
                                "Technical Responsibilities:",
                                "1. Responsible for management backend system service construction, technology selection, database design, development environment setup, and backend system service business function development",
                                "2. Introduced Satoken+Redis lightweight framework for permissions, Lock4j+Redis distributed lock for duplicate submission prevention, timer implementation for automatic sales allocation of customer appointments with SMS notifications and notification bar push",
                                "3. Backend integration of JPush client for group-oriented push functionality, introduced Skywalking for service performance monitoring, log collection, alerting, and implemented AOP-based log management",
                                "4. App-side WebView and frontend hybrid development, saving multi-end development costs, integrated common App functions (Alipay SDK, WeChat SDK, JPush SDK, OpenInstall SDK) for backend push notifications, payment initiation, parameterized installation, installation download statistics, WeChat sharing, map navigation"
                            ],
                            zh: [
                                "项目背景：",
                                "1. 管理端后台系统前端搭建以及业务实现",
                                "2. Android App WebView混合开发，该系统是二手汽车销售服务系统，该项目主要包含：",
                                "   • 管理端后台系统",
                                "   • API服务（注册、登录、客服、汽车商品展示、维修保养、销售预约、销售评价）",
                                "   • 后台系统（商品管理、用户管理、商品服务管理、订单管理、支付管理、第三方支付渠道管理、报表统计、客服管理、系统配置）",
                                "   • App使用WebView套壳网页实现App功能",
                                "开发环境架构：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技术负责：",
                                "1. 负责项目管理端后台系统服务搭建、技术选型、参与需求转化数据库表设计、开发环境搭建、后台系统服务业务功能开发实现",
                                "2. 引入Satoken+Redis轻量化框架实现权限、Lock4j+Redis分布式锁防重复提交、定时器现客户预约自动销分配自动短信通知自动通知栏推送",
                                "3. 后台集成极光推送客户端，实现群推定向推送功能，引入Skywalking实现服务性能监控、日志采集、告警，实现基于AOP的日志管理",
                                "4. App端WebView与前端混合开发，节约多端开发成本，集成常用App功能（支付宝SDK、微信SDK、极光SDK、OpenInstall SDK）实现后台推送手机消息、拉起支付、带参安装、安装下载统计、微信分享、地图导航"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "1. 管理バックエンドシステムのフロントエンド構築と業務実装",
                                "2. Android App WebViewハイブリッド開発、中古車販売サービスシステムとして、以下を含む：",
                                "   • 管理バックエンドシステム",
                                "   • APIサービス（登録、ログイン、カスタマーサービス、車両商品表示、メンテナンス、販売予約、販売評価）",
                                "   • バックエンドシステム（商品管理、ユーザー管理、商品サービス管理、注文管理、決済管理、第三者決済チャネル管理、レポート統計、カスタマーサービス管理、システム設定）",
                                "   • WebViewシェルを使用したアプリ機能の実装",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技術担当：",
                                "1. 管理バックエンドシステムサービスの構築、技術選定、要件変換データベース設計、開発環境構築、バックエンドシステムサービス機能開発を担当",
                                "2. Satoken+Redis軽量フレームワークによる権限管理、Lock4j+Redis分散ロックによる重複送信防止、タイマーによる顧客予約の自動販売割り当てとSMS通知、通知バープッシュの実装",
                                "3. バックエンドにJPushクライアントを統合してグループ指向プッシュ機能を実現、Skywalkingを導入してサービス性能監視、ログ収集、アラート、AOPベースのログ管理を実装",
                                "4. App側WebViewとフロントエンドのハイブリッド開発によるマルチエンド開発コストの削減、一般的なアプリ機能（Alipay SDK、WeChat SDK、JPush SDK、OpenInstall SDK）を統合してバックエンドプッシュ通知、決済起動、パラメータ付きインストール、インストールダウンロード統計、WeChat共有、地図ナビゲーションを実現"
                            ]
                        },
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
                ]
            },
            huawei: {
                name: {
                    en: "华为（成都研究所） - Java开发",
                    zh: "华为（成都研究所） - Java开发",
                    ja: "華為（成都研究所） - Java開発者"
                },
                period: "2016.12-2020.01",
                location: "Chengdu",
                description: {
                    en: "Participated in the development and maintenance of multiple important Huawei projects",
                    zh: "参与华为多个重要项目的开发和维护工作",
                    ja: "華為の複数の重要プロジェクトの開発とメンテナンスに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Huawei AIFlow Algorithm Training Platform",
                            zh: "华为AIFlow算法训练平台",
                            ja: "華為AIFlowアルゴリズム訓練ラットフォーム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Development of AIFlow algorithm training platform under Huawei 2012 Lab, implementing online training platform for machine learning and deep learning",
                            zh: "华为2012实验室下的AIFlow算法训练平台开发，实现机器学习和深度学习的在线训练平台",
                            ja: "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発、機械学習とディープラーニングのオンライン訓練プラットフォームを実現"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab. Main features include:",
                                "• Online algorithm editing with Jupyter for machine learning & deep learning",
                                "• Training resource (servers, GPU, CPU) application, approval, creation, execution, monitoring, and log retrieval",
                                "• Additional core services (data annotation service, data cleaning service, dataset retrieval service)",
                                "• Support for TensorFlow & Caffe framework computation",
                                "• Support for multi-machine multi-GPU task training",
                                "",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "",
                                "Technical Responsibilities:",
                                "1. Backend Deep Learning Management Implementation:",
                                "   • Task module with Redis delayed queue timer scanning for automatic task initiation",
                                "   • Training module supporting different systems (TensorFlow, Caffe) for template selection and training mode",
                                "   • Dataset module with MongoDB integration",
                                "   • One-click log batch import to Elasticsearch for quick retrieval",
                                "",
                                "2. Deep Learning Task Scheduling Service:",
                                "   • Thread pool multi-threading for task scheduling",
                                "   • Delayed task scheduling implementation",
                                "",
                                "3. Email Service Resource Approval:",
                                "   • MQ task message queue binding",
                                "   • Task message consumption and email dispatch based on type (deep learning, machine learning, multi-machine multi-GPU)",
                                "   • Email template-based notifications to relevant stakeholders"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，平台主要功能：",
                                "• 机械&深度学习jupter在线算法编辑",
                                "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监控、日志检索",
                                "• 包含其他的主要业务(数据标注服务、数据清洗服务、数据集检索服务)",
                                "• 支持可选TensorFlow&Caffe框架运算",
                                "• 支持多机多卡任务训练",
                                "",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "技术负责：",
                                "1. 后台深度学习管理功能实现：",
                                "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                                "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                                "   • 数据集模块",
                                "   • 一键运行日志批量导入es实现快速检索",
                                "",
                                "2. 实现深度学习任务调度服务：",
                                "   • 线程池多线程处理任务调度",
                                "   • 延迟任务调度实现",
                                "",
                                "3. 邮件服务审批资源：",
                                "   • 绑定mq任务消息队列",
                                "   • 消费任务消息根据类型（深度、机器、多机多卡）根据邮件模板发送邮件到相关负责人"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発。主な機能：",
                                "• 機械学習とディープラーニングのJupyter オンラインアルゴリズム編集",
                                "• トレーニングリソース（サーバー、GPU、CPU）の申請、承認、作成、実行、監視、ログ検索",
                                "• その他の主要サービス（データアノテーションサービス、データクリーニングサービス、データセット検索サービス）",
                                "• TensorFlow & Caffeフレームワークの計算をサポート",
                                "• マルチマシン・マルチGPUタスクトレーニングをサポート",
                                "",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• Spring Cloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "術担当：",
                                "1. バックエンドディープラーニング管理機能の実装：",
                                "   • タスクモジュール（Redis遅延キュースキャンター自動タスク起動）",
                                "   • トレーニングモジュール（TensorFlow、Caffeなど異なるシステムのトレーニングテンプレート選択とトレーニングモード、MongoDBデータセットJSONの取得）",
                                "   • データセットモジュール",
                                "   • ワンクリックログ一括インポートとElasticsearchによる高速検索",
                                "",
                                "2. ディープラーニングタスクスケジューリングサービスの実装：",
                                "   • スレッドプールマルチスレッドによるタスクスケジューリング",
                                "   • 遅延タスクスケジューリングの実装",
                                "",
                                "3. メールサービスリソース承認：",
                                "   • MQタスクメッセージキューのバインド",
                                "   • タスクメッセージの消費とタイプ（ディープラーニング、機械学習、マルチマシン・マルチGPU）に基づく関係者へのメールテンプレート送信"
                            ]
                        },
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
                        title: {
                            en: "Huawei India Telecom BA Base Station System",
                            zh: "华为印度电信商BA基站系统",
                            ja: "華為インド通信事業者BA基地局システム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Base station management system built for Huawei's Indian telecom customer, managing and analyzing the operational status of equipment under Huawei operators",
                            zh: "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态",
                            ja: "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム、華為の通信事業者配下の機器運用状態を管理・統計"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Base station management system built for Huawei's Indian telecom customer, integrating inventory, maintenance, and personnel management for base station equipment.",
                                "Development Environment & Architecture:",
                                "• JDK1.7, Virtual Cloud Desktop, Maven, SVN",
                                "• Spring MVC, MyBatis, MQ, Redis",
                                "• JSP, Bootstrap",
                                "Technical Responsibilities:",
                                "1. Backend module implementation - Base station data aggregation timer for batch JSON data import, AOP encryption/decryption",
                                "2. Performance optimization for online issues, slow SQL query optimization, daily bug fixes",
                                "3. Database sharding and partial code refactoring"
                            ],
                            zh: [
                                "项目背景：",
                                "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态，集库存、修理、责任人一体化统计管理基站设备。",
                                "开发环境架构：",
                                "• JDK1.7、虚拟云桌面、Maven、SVN",
                                "• SpringMVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技术负责：",
                                "1. 后台新增模块实现-基站数据信息汇总定时器拉取json数据批量入库，aop加解密",
                                "2. 处理线上性能故障进行性能调优、处理慢sql、修改日常bug",
                                "3. 数据库分表，部分代码重构"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム。在庫、修理、責任者の一体化統計管理を含む基地局設備の運用状態を管理・統計。",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.7、仮想クラウドデスクトップ、Maven、SVN",
                                "• Spring MVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技術担当：",
                                "1. バックエンド新規モジュール実装 - 基地局データ情報集計タイマーによるJSONデータ一括インポート、AOP暗号化/復号化",
                                "2. オンラインパフォーマンス問題の最適化、低速SQLクエリの最適化、日常的なバグ修正",
                                "3. データベースシャーディングと部分的なコードリファクタリング"
                            ]
                        },
                        technologies: [
                            "Spring MVC",
                            "MyBatis",
                            "Redis",
                            "RabbitMQ",
                            "JSP",
                            "Bootstrap",
                            "Maven",
                            "SVN"
                        ]
                    }
                ]
            },
            gameCompany: {
                name: {
                    en: "Chengdu Qianzhiyou (2K GAME) - QA Testing",
                    zh: "成都迁之游（2K GAME）- QA测试",
                    ja: "成都遷之遊（2K GAME）- QAテスト"
                },
                period: "2016.08-2016.09",
                location: "成都",
                description: {
                    en: "Participated in 2K GAME testing department, responsible for testing multiple well-known games",
                    zh: "参与2K GAME游戏测试部门，负责多款知名游戏的测试工作",
                    ja: "2K GAMEテスト部門に参加し、複数の有名ゲームのテストを担当"
                },
                projects: [
                    {
                        title: {
                            en: "2K Games Testing Projects",
                            zh: "2K游戏测试项目",
                            ja: "2Kゲームテストプロジェクト"
                        },
                        type: {
                            en: "Game Testing",
                            zh: "游戏测试",
                            ja: "ゲームテスト"
                        },
                        description: {
                            en: "Participated in testing multiple AAA titles including Mafia II, Civilization Mobile, NBA 2K series, and Borderlands",
                            zh: "参与多款知名游戏的测试工作，包括黑手党2、文明手游、NBA 2K系列、无主之地等",
                            ja: "マフィアII、シヴィライゼーションモバイル、NBA 2Kシリーズ、ボーダーランズなど、複数の有名ゲームのテストに参加"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "As a member of 2K GAME testing department, participated in testing multiple well-known games:",
                                "• Mafia II",
                                "• Civilization Mobile",
                                "• NBA 2K Series",
                                "• Borderlands",
                                "Main Responsibilities:",
                                "1. Functionality testing and bug reporting",
                                "2. Game performance testing",
                                "3. User experience evaluation",
                                "4. Test report documentation"
                            ],
                            zh: [
                                "项目背景：",
                                "作为2K GAME测试部门的一员，参与多款知名游戏的测试工作：",
                                "• 黑手党2",
                                "• 文明手游",
                                "• NBA 2K系列",
                                "• 无主之地",
                                "主要职责：",
                                "1. 功能测试与bug反馈",
                                "2. 游戏性能测试",
                                "3. 用户体验评估",
                                "4. 测试报告编写"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "2K GAMEテスト部門のメンバーとして、複数の有名ゲームのテストに参加：",
                                "• マフィアII",
                                "• シヴィライゼーションモバイル",
                                "• NBA 2Kシリーズ",
                                "• ボーダーランズ",
                                "主な責任：",
                                "1. 機能テストとバグ報告",
                                "2. ゲームパフォーマンステスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ]
                        },
                        technologies: [
                            "ゲームテスト",
                            "バグトラッキング",
                            "パフォーマンステスト",
                            "ユーザーエクスペリエンステスト"
                        ]
                    }
                ]
            },
            microlight: {
                name: {
                    en: "Microlight Semiconductor - Layout Engineer",
                    zh: "成都微光集电科技 - 版图工程师",
                    ja: "成都微光集電科技 - レイアウトエンジニア"
                },
                period: "2015.08-2016.08",
                location: "成都",
                description: {
                    en: "Participated in analog layout design and verification of multiple chips",
                    zh: "参与多个芯片的模拟版图设计与验证工作",
                    ja: "複数のチップのアナログレイアウト設計と検証に参加"
                },
                projects: [
                    {
                        title: {
                            en: "Chip Layout Design Projects",
                            zh: "芯片版图设计项目",
                            ja: "チップレイアウト設計プロジェクト"
                        },
                        type: {
                            en: "IC Layout Design",
                            zh: "集成电路版图设计",
                            ja: "集積回路レイアウト設計"
                        },
                        description: {
                            en: "Multiple chip layout design and verification projects based on HLMC 40nm/55nm process",
                            zh: "基于华力微电子40nm/55nm工艺的多个芯片版图设计与验证项目",
                            ja: "HLMC 40nm/55nmプロセスに基づく複数のチップレイアウト設計と検証プロジェクト"
                        },
                        details: {
                            en: [
                                "Project Content:",
                                "1. PR digital cell library analog layout design for HLMC 40nm process",
                                "2. Beidou Xiaolajiao Mobile Phone Fingerprint Chip Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout design and verification of fingerprint chip oscillator module",
                                "   • Conducted circuit simulation and performance verification",
                                "   • Ensured design meets fingerprint recognition performance requirements",
                                "3. HD Camera Sensor Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout implementation of 16MP/4MP/2MP pixel sensors",
                                "   • Conducted DRC/LVS verification and parameter extraction",
                                "   • Ensured design meets image capture performance metrics"
                            ],
                            zh: [
                                "项目内容：",
                                "1. 上海华力微电子40nm工艺PR数字单元库模拟版图设计",
                                "2. 北斗小辣椒手机指纹芯片项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责指纹芯片振荡器模块的模拟版图设计与验证",
                                "   • 进行电路仿真和性能验证",
                                "   • 确保设计满足指纹识别的性能要求",
                                "3. 高清摄像头传感器项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责1600w/400w/200w像素传感器的模拟版图实现",
                                "   • 进行DRC/LVS验证和参数提取",
                                "   • 确保设计满足图像采集的性能指标"
                            ],
                            ja: [
                                "プロジェクト内容：",
                                "1. 上海華力マイクロエレクトロニクス40nmプロセスPRデジタルセルライブラリアナログレイアウト設計",
                                "2. 北斗シャオラージャオ携帯電話指紋チッププロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 指紋チップ発振器モジュールのアナログレイアウト設計と検証を担当",
                                "   • 回路シミュレーションと性能検証を実施",
                                "   • 指紋認識の性能要件を満たす設計を確保",
                                "3. HDカメラセンサープロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 1600万/400万/200万画素センサーのアナログレイアウト実装を担当",
                                "   • DRC/LVS検証とパラメータ抽出を実施",
                                "   • 画像キャプチャの性能指標を満たす設計を確保"
                            ]
                        },
                        technologies: [
                            "Cadence Virtuoso",
                            "55nm工艺",
                            "40nm工艺",
                            "模拟版图设计",
                            "DRC/LVS",
                            "电路仿真"
                        ]
                    }
                ]
            },
            university: {
                name: {
                    en: "Chengdu College of University of Electronic Science and Technology of China",
                    zh: "电子科技大学成都学院",
                    ja: "電子科技大学成都学院"
                },
                period: "2011.09-2015.08",
                location: "Chengdu",
                description: {
                    en: "Bachelor of Electronic Science and Technology (Microelectronics)",
                    zh: "电子科学与技术（微电子）学士",
                    ja: "電子科学技術（マイクロエクトロニクス）学士"
                }
            },
            semiconductor: {
                name: {
                    en: "Chengdu Suochenyi Semiconductor - Analog Circuit Engineer",
                    zh: "成都索成易半导体 - 模拟电路工程师",
                    ja: "成都索成易半導体 - アナログ回路エンジニア"
                },
                period: "2014.03-2014.11",
                location: "Chengdu",
                description: {
                    en: "Participated in analog circuit power module implementation, verification and simulation for Apple camera sensors (Sony IMX series) under Fujitsu 50nm process",
                    zh: "参与富士通50nm工下苹果摄像传感器（索尼IMX系列传感器）模拟电路电源模块实现、电路验证与仿真",
                    ja: "富士通50nmプロセスでのアップルカメラセンサー（ソニーIMXシリーズセンサー）のアナログ回路電源モジュール実装、回路検証とシミュレーションに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Sony IMX220 Camera Sensor Power Module",
                            zh: "索尼IMX220摄像传感器芯片电源模块",
                            ja: "ソニーIMX220カメラセンサー電源モジュール"
                        },
                        type: {
                            en: "Analog Circuit Design",
                            zh: "模拟电路设计",
                            ja: "アナログ回路設計"
                        },
                        description: {
                            en: "Power management module design and verification for Sony IMX220 camera sensor (iPhone 6 12MP) based on Fujitsu 50nm process",
                            zh: "基于富士通50nm工艺，为索尼IMX220摄像传感器芯片（iPhone 6摄像头1200W）进行电源管理模块的设计与验证",
                            ja: "富士通50nmプロセスに基づき、ソニーIMX220カメラセンサーチップ（iPhone 6カメラ1200万画素）の電源管理モジュールの設計と検証"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab. Main features include:",
                                "• Online algorithm editing with Jupyter for machine learning & deep learning",
                                "• Training resource (servers, GPU, CPU) application, approval, creation, execution, monitoring, and log retrieval",
                                "• Additional core services (data annotation service, data cleaning service, dataset retrieval service)",
                                "• Support for TensorFlow & Caffe framework computation",
                                "• Support for multi-machine multi-GPU task training",
                                "",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "",
                                "Technical Responsibilities:",
                                "1. Backend Deep Learning Management Implementation:",
                                "   • Task module with Redis delayed queue timer scanning for automatic task initiation",
                                "   • Training module supporting different systems (TensorFlow, Caffe) for template selection and training mode",
                                "   • Dataset module with MongoDB integration",
                                "   • One-click log batch import to Elasticsearch for quick retrieval",
                                "",
                                "2. Deep Learning Task Scheduling Service:",
                                "   • Thread pool multi-threading for task scheduling",
                                "   • Delayed task scheduling implementation",
                                "",
                                "3. Email Service Resource Approval:",
                                "   • MQ task message queue binding",
                                "   • Task message consumption and email dispatch based on type (deep learning, machine learning, multi-machine multi-GPU)",
                                "   • Email template-based notifications to relevant stakeholders"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，平台主要功能：",
                                "• 机械&深度学习jupter在线算法编辑",
                                "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监控、日志检索",
                                "• 包含其他的主要业务(数据标注服务、数据清洗服务、数据集检索服务)",
                                "• 支持可选TensorFlow&Caffe框架运算",
                                "• 支持多机多卡任务训练",
                                "",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "技术负责：",
                                "1. 后台深度学习管理功能实现：",
                                "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                                "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                                "   • 数据集模块",
                                "   • 一键运行日志批量导入es实现快速检索",
                                "",
                                "2. 实现深度学习任务调度服务：",
                                "   • 线程池多线程处理任务调度",
                                "   • 延迟任务调度实现",
                                "",
                                "3. 邮件服务审批资源：",
                                "   • 绑定mq任务消息队列",
                                "   • 消费任务消息根据类型（深度、机器、多机多卡）根据邮件模板发送邮件到相关负责人"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発。主な機能：",
                                "• 機械学習とディープラーニングのJupyter オンラインアルゴリズム編集",
                                "• トレーニングリソース（サーバー、GPU、CPU）の申請、承認、作成、実行、監視、ログ検索",
                                "• その他の主要サービス（データアノテーションサービス、データクリーニングサービス、データセット検索サービス）",
                                "• TensorFlow & Caffeフレームワークの計算をサポート",
                                "• マルチマシン・マルチGPUタスクトレーニングをサポート",
                                "",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• Spring Cloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "術担当：",
                                "1. バックエンドディープラーニング管理機能の実装：",
                                "   • タスクモジュール（Redis遅延キュースキャンター自動タスク）",
                                "   • トレーニングモジュール（TensorFlow、Caffeなど異なるシステムのトレーニングテンプレート選択とトレーニングモード、MongoDBデータセットJSONの取得）",
                                "   • データセットモジュール",
                                "   • ワンクリックログ一括インポートとElasticsearchによる高速検索",
                                "",
                                "2. ディープラーニングタスクスケジューリングサービスの実装：",
                                "   • スレッドプールマルチスレッドによるタスクスケジューリング",
                                "   • 遅延タスクスケジューリングの実装",
                                "",
                                "3. メールサービスリソース承認：",
                                "   • MQタスクメッセージキューのバインド",
                                "   • タスクメッセージの消費とタイプ（ディープラーニング、機械学習、マルチマシン・マルチGPU）に基づく関係者へのメールテンプレート送信"
                            ]
                        },
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
                    }
                ]
            }
        }
    },
    ja: {
        companies: {
            softwareCompany: {
                name: {
                    en: "ソフトウェア開発者",
                    zh: "软件开发工程师",
                    ja: "ソフトウェア開発者"
                },
                period: "2021.07-現在",
                location: "成都",
                description: {
                    en: "Full stack development engineer, responsible for architecture design and development of multiple projects",
                    zh: "全栈开发工程师，负责多个项目的架构设计和开发",
                    ja: "フルスタック開発エンジニアとして、複数のプロジェクトのアーキテクチャ設計と開発を担当"
                },
                projects: [
                    {
                        title: {
                            en: "Enterprise Information Management System",
                            zh: "铭泰中弘企业信息管理系统",
                            ja: "銘泰中弘企業情報管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Enterprise information system upgrade, building information backend system, mainly for personnel organization structure, project report management, project audit process, and ODS file generation with old system docking",
                            zh: "企业信息化升级，搭建信息化后台系统，主要业务-人员组织架构、项目报表管理、项目审核流程、与老系统对接生成ODS文件",
                            ja: "企業情報システムのアップグレード、情報バックエンドシステムの構築、主に人事組織構造、プロジェクトレポート管理、プロジェクト監査プロセス、旧システムとの連携によるODSファイル生成"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development, collaborative development, secondary development of existing warehouse management service. Main business includes warehouse ERP backend service, multi-user system, warehouse goods tracking, and in/out warehouse light control",
                                "Development Environment & Architecture:",
                                "• Vue3, Vuetify2, Pinia",
                                "• JDK1.8, SpringBoot, MyBatis-Plus",
                                "• Redis, MySQL, Skywalking, Elasticsearch",
                                "• AWS ECS, Git",
                                "Technical Responsibilities:",
                                "1. Upgraded existing JSP+Java backend service, implemented frontend-backend separation, redesigned management UI with Vue3+Vuetify2, implemented user system UI, permission UI, and log tracking UI",
                                "2. Used Ruoyi plus standalone service as interface service, main implementations:",
                                "   • User system and permission design",
                                "   • Log service and warehouse change tracking",
                                "   • Third-party shelf light interface integration",
                                "   • Redis-based delayed queue task processing",
                                "   • Service link tracking with Skywalking+ES probe technology"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发、协同开发、对现有仓库管理服务进行二次开发。主要业务包括仓库ERP后台服务、多用户系统、仓库商品追踪、出入库灯光控制等",
                                "开发环境架构：",
                                "• Vue3、Vuetify2、Pinia",
                                "• JDK1.8、SpringBoot、MyBatis-Plus",
                                "• Redis、MySQL、Skywalking、Elasticsearch",
                                "• AWS ECS、Git",
                                "技术职责：",
                                "1. 升级现有JSP+Java后台服务，实现前后端分离，使用Vue3+Vuetify2重新设计管理界面，实现用户系统界面、权限界面、日志追踪界面",
                                "2. 使用Ruoyi plus独立服务作为接口服务，主要实现：",
                                "   • 用户系统和权限设计",
                                "   • 日志服务和仓库变动追踪",
                                "   • 第三方货架灯光接口集成",
                                "   • 基于Redis的延迟队列任务处理",
                                "   • 使用Skywalking+ES探针技术进行服务链路追踪"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発、協力開発、既存の倉庫管理サービスの二次開発。主要業務は倉庫ERPバックエンドサービス、マルチユーザーシステム、倉庫商品追跡、入出庫ライト制御など",
                                "開発環境・アーキテクチャ：",
                                "• Vue3、Vuetify2、Pinia",
                                "• JDK1.8、SpringBoot、MyBatis-Plus",
                                "• Redis、MySQL、Skywalking、Elasticsearch",
                                "• AWS ECS、Git",
                                "技術担当：",
                                "1. 既存のJSP+Javaバックエンドサービスをアップグレード、フロントエンドとバックンドの分離を実施、Vue3+Vuetify2管理画面を再設計し、ユーザーシステム画面、権限画面、ログ追跡画面実現",
                                "2. Ruoyi plusの単体サービスをインターフェースサービスとして使用し、主な実装：",
                                "   • ユーザーシステムと権限設計",
                                "   • ログサービスと倉庫変動追跡",
                                "   • サードパーティ棚ライトインターフェース連携",
                                "   • Redisベースの遅延キューによるタスク処理",
                                "   • Skywalking+ESプローブ技術によるサービスリンク追跡"
                            ]
                        },
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
                        title: {
                            en: "Second-hand Mobile Phone Trading Platform",
                            zh: "博弈优品闲置新生二手批发电商小程序",
                            ja: "中古携帯電話取引プラットフォーム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A B2B&B2C marketplace project focusing on second-hand mobile phone sales. Core business includes second-hand wholesale, recycling quotation, free market, B2C mall integration, quality inspection management, and ERP",
                            zh: "该项目为2B&2C商城项目主营手手机销售，核心业务二手批发、回收报价、自由市场、2C嫁接商城、质检管理、ERP",
                            ja: "B2B&B2Cマーケットプレイスプロジェクトで、中古携帯電話販売に焦点を当てています。主要業務は中古卸売、リサイクル見積もり、フリーマーケット、B2Cモール統合、品質検査管理、ERPを含みます"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "2K GAMEテスト部門の一員として、複数の有名ゲームのテスト作業に参加",
                                "• マィアII",
                                "• シヴィライゼーションモバイル",
                                "• NBA 2Kシリー",
                                "• ボダーランズ",
                                "主な役割：",
                                "1. 機能テストとバグフィードバック",
                                "2. ゲーム性能テスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ],
                            zh: [
                                "项目背景：",
                                "作为2K GAME测试部门的一员，参与多款知名游戏的测试工作",
                                "• 黑手党2",
                                "• 文明手游",
                                "• NBA 2K系列",
                                "• 无主之地",
                                "主要职责：",
                                "1. 功能测试与bug反馈",
                                "2. 游戏性能测试",
                                "3. 用户体验评估",
                                "4. 测试报告编写"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "2K GAMEテスト部門のメンバーとして、複数の有名ゲームのテストに参加",
                                "• マフィアII",
                                "• シヴィライゼーョンモバイル",
                                "• NBA 2Kシリー",
                                "• ボーダーランズ",
                                "主な役割：",
                                "1. 機能テストとバグフィードバック",
                                "2. ゲーム性能テスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ]
                        },
                        technologies: [
                            "ゲームテスト",
                            "バグトラッキング",
                            "パフォーマンステスト",
                            "ユーザーエクスペリエンステスト"
                        ]
                    },
                    {
                        title: {
                            en: "Knight Delivery Mini Program",
                            zh: "骑士派小程序",
                            ja: "ナイトデリバリーミニプログラム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "Remote development, full-stack development, independent development, WeChat mini program that can be packaged as Android app, with 4 ends including user end and rider end",
                            zh: "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                            ja: "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Remote development, full-stack development, independent development of a WeChat mini program that can be packaged as an Android app, with 4 endpoints including user end and rider end",
                                "Development Environment & Architecture:",
                                "• JDK1.8, GitLab",
                                "• Spring Boot, MyBatis",
                                "• Redis, Vue.js 3, Uniapp, Vant",
                                "• Docker, MinIO",
                                "Technical Responsibilities:",
                                "1. Developed mini program frontend using Uniapp, backend services based on Ruoyi Plus framework, implementing multi-tenant user system, Aliyun SMS login, WeChat and Alipay payment integration, Redis-based delayed queue subscription pipeline for automatic order dispatch based on location and timeout payment order processing (location and timeout anomaly penalty calculation), using Redisson locks for concurrent order grabbing",
                                "2. Implemented built-in Tencent Map navigation with point marking, point selection, and route planning, sharing posters, subscription template messages, rider order grabbing hall, backend Vue.js 3 + Element UI implementation of user system, order management, website management, content management, data statistics with Excel import/export"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发，全栈开发，独立开发，微信小程序可打包安卓端，共4个端，用户端 骑士端",
                                "开发环境架构：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技术负责：",
                                "1. 使用Uniapp开发小程序前端，后端基于若依plus的接口服务与后台服务，主要实现多租户的用户体系，阿里云短信登录，对接微信支付宝支付，基于Redis延迟队列订阅管道以及定位的实现区域自动派单以及超时支付订单处理 罚单计算（位置异常超时异常），Redission锁解决抢单并发",
                                "2. Uniapp实现内置腾讯地图导航 描点 选点 路线规划，分享海报，订阅模板消息、骑手端抢单大厅，后台Vue.js 3 + Element UI实现用户体系，订单管理，网站管理，内容管理，数据统计Excel导入导出等"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発、フルスタック開発、独立開発、Androidアプリとしてパッケージ化可能なWeChatミニプログラム、ユーザー端末とライダー端末を含む4つの端末",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、GitLab",
                                "• Spring Boot、MyBatis",
                                "• Redis、Vue.js 3、Uniapp、Vant",
                                "• Docker、MinIO",
                                "技術担当：",
                                "1. Uniappを使用してミニプログラムのフロントエンド開発、Ruoyi Plusフレームワークに基づくバックエンドサービス、マルチテナントユーザーシステム、Aliyun SMS認証、WeChatとAlipay決済連携、Redis遅延キューサブスクリプションパイプラインによる位置情報に基づく自動配車と支払いタイムアウト処理（位置異常タイムアウト異常のペナルティ計算）、Redissonロックによる同時注文処理の実装",
                                "2. 腾讯地図ナビゲーションの組み込み実装（ポイントマーキング、ポイント選択、ルート計画）、ポスター共有、サブスクリプションテンプレートメッセージ、ライダー注文受付ホール、バックエンドVue.js 3 + Element UIによるユーザーシステム、注文管理、ウェブサイト管理、コンテンツ管理、データ統計のExcelインポート/エクスポート機能の実装"
                            ]
                        },
                        technologies: [
                            "Uniapp",
                            "Vue.js 3",
                            "Spring Boot",
                            "MyBatis",
                            "Redis",
                            "Docker",
                            "Element UI",
                            "Vant",
                            "Minio"
                        ]
                    },
                    {
                        title: {
                            en: "Rikiyun Corporation Warehouse Management System",
                            zh: "力运株式会社仓储管理系统",
                            ja: "力運株式会社倉庫管理システム"
                        },
                        type: {
                            en: "Full Stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive warehouse management system with multi-warehouse ERP backend services, featuring multi-tenant architecture, inventory tracking, and automated warehouse lighting control",
                            zh: "全面的仓储管理系统，实现多仓储ERP后台服务，包含多用户体系、仓储货物追踪、进出库灯架控制等核心功能",
                            ja: "マルチ倉庫ERPバックエンドサービス、マルチテナントアーキテクチャ、在庫追跡、自動倉庫照明制御を備えた総合的な倉庫管理システム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "リモート開発と協力開発プロジェクトで、既存のJSPバックエンド倉庫サービスを最新化し、次世代倉庫管理システムを構築。主要業務：",
                                "• マルチ倉庫ERPバックエンドサービス統合",
                                "• マルチテナントユーザーシステムアーキテクチャ",
                                "• リアルタイム在庫追跡",
                                "• スマート入出庫照明制御",
                                "• 総合的な倉庫データ分析",
                                "",
                                "開発環境・アーキテクチャ：",
                                "フロントエンド技術スタック：",
                                "• Vue.js 3 - モダンフロントエンドフレームワーク",
                                "• Vuetify 2 - マテリアルデザインコンポーネントライブラリ",
                                "• Pinia - 次世代状態管理ツール",
                                "",
                                "バックエンド技術スタック：",
                                "• Spring Boot - メインフレームワーク",
                                "• MyBatis-Plus - ORMフレームワーク",
                                "• Redis - キャッシュとキュー",
                                "• MySQL - データ永続化",
                                "• Skywalking - 分散トレーシング",
                                "• Elasticsearch - ログと検索",
                                "",
                                "クラウドサービス：",
                                "• AWS ECS - コンテナサービス",
                                "• Git - バージョン管理",
                                "",
                                "技術的なハイライト：",
                                "1. システムアーキテクチャのアップグレード：",
                                "   • 従来のJSP+Javaアーキテクチャからフロントエンド・バックエンド分離へ移行",
                                "   • Vue3+Vuetify2によるフロントエンド再構築",
                                "   • モジュール化されたUI設計の実現",
                                "",
                                "2. コア機能の実装：",
                                "   • Ruoyi PlusフレームワークベースのAPIサービス",
                                "   • 包括的なユーザー権限システム",
                                "   • リアルタイムログと在庫変動追跡",
                                "   • スマート棚照明制御の統合",
                                "",
                                "3. パフォーマンス最適化と監視：",
                                "   • Redisベースの遅延キュータスク処理",
                                "   • Skywalking+ESによる全チェーン追跡",
                                "   • リアルタイムパフォーマンス監視とアラート",
                                "   • 分散システムのパフォーマンス最適化"
                            ],
                            zh: [
                                "项目背景：",
                                "远程开发与合作开发项目，对原有的JSP后台仓储服务进行现代化改造，打造新一代仓储管理系统。核心业务包括：",
                                "• 多仓储ERP后台服务集成",
                                "• 多租户用户体系架构",
                                "• 实时仓储货物追踪",
                                "• 智能化进出库灯架控制",
                                "• 全方位仓储数据分析",
                                "",
                                "开发环境架构：",
                                "前端技术栈：",
                                "• Vue.js 3 - 现代化前端框架",
                                "• Vuetify 2 - Material Design组件库",
                                "• Pinia - 新一代状态管理工具",
                                "",
                                "后端技术栈：",
                                "• Spring Boot - 主框架",
                                "• MyBatis-Plus - ORM框架",
                                "• Redis - 缓存与队列",
                                "• MySQL - 数据持久化",
                                "• Skywalking - 分布式追踪",
                                "• Elasticsearch - 日志与搜索",
                                "",
                                "云服务架构：",
                                "• AWS ECS - 容器服务",
                                "• Git - 版本控制",
                                "",
                                "技术亮点：",
                                "1. 系统架构升级：",
                                "   • 将传统JSP+Java架构升级为前后端分离架构",
                                "   • 采用Vue3+Vuetify2重构前端界面",
                                "   • 实现模块化的用户界面设计",
                                "",
                                "2. 核心功能实现：",
                                "   • 基于Ruoyi Plus框架的接口服务",
                                "   • 完善的用户权限体系",
                                "   • 实时日志服务与仓储变动追踪",
                                "   • 智能货架灯控制接口集成",
                                "",
                                "3. 性能优化与监控：",
                                "   • 基于Redis的延迟队列任务处理",
                                "   • 使用Skywalking+ES实现全链路追踪",
                                "   • 实时性能监控与告警机制",
                                "   • 分布式系统性能优化"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "リモート開発と協力開発プロジェクトで、既存のJSPバックエンド倉庫サービスを最新化し、次世代倉庫管理システムを構築。主要業務：",
                                "• マルチ倉庫ERPバックエンドサービス統合",
                                "• マルチテナントユーザーシステムアーキテクチャ",
                                "• リアルタイム在庫追跡",
                                "• スマート入出庫照明制御",
                                "• 総合的な倉庫データ分析",
                                "",
                                "開発環境・アーキテクチャ：",
                                "フロントエンド技術スタック：",
                                "• Vue.js 3 - モダンフロントエンドフレームワーク",
                                "• Vuetify 2 - マテリアルデザインコンポーネントライブラリ",
                                "• Pinia - 次世代状態管理ツール",
                                "",
                                "バックエンド技術スタック：",
                                "• Spring Boot - メインフレームワーク",
                                "• MyBatis-Plus - ORMフレームワーク",
                                "• Redis - キャッシュとキュー",
                                "• MySQL - データ永続化",
                                "• Skywalking - 分散トレーシング",
                                "• Elasticsearch - ログと検索",
                                "",
                                "クラウドサービス：",
                                "• AWS ECS - コンテナサービス",
                                "• Git - バージョン管理",
                                "",
                                "技術的なハイライト：",
                                "1. システムアーキテクチャのアップグレード：",
                                "   • 従来のJSP+Javaアーキテクチャからフロントエンド・バックエンド分離へ移行",
                                "   • Vue3+Vuetify2によるフロントエンド再構築",
                                "   • モジュール化されたUI設計の実現",
                                "",
                                "2. コア機能の実装：",
                                "   • Ruoyi PlusフレームワークベースのAPIサービス",
                                "   • 包括的なユーザー権限システム",
                                "   • リアルタイムログと在庫変動追跡",
                                "   • スマート棚照明制御の統合",
                                "",
                                "3. パフォーマンス最適化と監視：",
                                "   • Redisベースの遅延キュータスク処理",
                                "   • Skywalking+ESによる全チェーン追跡",
                                "   • リアルタイムパフォーマンス監視とアラート",
                                "   • 分散システムのパフォーマンス最適化"
                            ]
                        },
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
                    }
                ]
            },
            digitalStudio: {
                name: {
                    en: "Chengdu Digital Design Studio - Java Developer",
                    zh: "成都数字设计工作室 - Java开发",
                    ja: "成都デジタルデインスタジオ - Java開発者"
                },
                period: "2020.07-2021.07",
                location: "Chengdu",
                description: {
                    en: "Participated in development work including product requirements analysis, architecture design, coding, and technical documentation, responsible for backend service development",
                    zh: "参与产品需求分析、架构设计、编码、技术文档编写等开发工作，负责后端服务开发",
                    ja: "製品の要件分析、アーキテクチャ設計、コーディング、技術文書作成などの開発作業に参加し、バックエンドサービスの開発を担当"
                },
                projects: [
                    {
                        title: {
                            en: "Second-hand Car Sales Service System",
                            zh: "品冠二手汽车销售服务系统",
                            ja: "中古車販売サービスシステム"
                        },
                        type: {
                            en: "Full-stack Development",
                            zh: "全栈开发",
                            ja: "フルスタック開発"
                        },
                        description: {
                            en: "A comprehensive second-hand car sales service system including management backend system, API service, payment system, and customer service system",
                            zh: "完整的二手汽车销售服务系统，包含管理端后台系统、API服务、支付系统、客服系统",
                            ja: "管理バックエンドシステム、APIサービス、決済システム、カスタマーサービスシステムを含む総合的な中古車販売サービスシステム"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "1. Frontend development of management backend system",
                                "2. Android App WebView hybrid development, this system is a second-hand car sales service system, including:",
                                "   • Management backend system",
                                "   • API services (registration, login, customer service, car product display, maintenance, sales appointment, sales evaluation)",
                                "   • Backend system (product management, user management, product service management, order management, payment management, third-party payment channel management, report statistics, customer service management, system configuration)",
                                "   • App functionality implemented through WebView shell",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Android SDK 29, Maven, Gradle, SVN",
                                "• Spring Boot, MyBatis-plus, Redis, Satoken",
                                "• MySQL, Lock4j, MinIO, Skywalking, Elasticsearch",
                                "Technical Responsibilities:",
                                "1. Responsible for management backend system service construction, technology selection, database design, development environment setup, and backend system service business function development",
                                "2. Introduced Satoken+Redis lightweight framework for permissions, Lock4j+Redis distributed lock for duplicate submission prevention, timer implementation for automatic sales allocation of customer appointments with SMS notifications and notification bar push",
                                "3. Backend integration of JPush client for group-oriented push functionality, introduced Skywalking for service performance monitoring, log collection, alerting, and implemented AOP-based log management",
                                "4. App-side WebView and frontend hybrid development, saving multi-end development costs, integrated common App functions (Alipay SDK, WeChat SDK, JPush SDK, OpenInstall SDK) for backend push notifications, payment initiation, parameterized installation, installation download statistics, WeChat sharing, map navigation"
                            ],
                            zh: [
                                "项目背景：",
                                "1. 管理端后台系统前端搭建以及业务实现",
                                "2. Android App WebView混合开发，该系统是二手汽车销售服务系统，该项目主要包含：",
                                "   • 管理端后台系统",
                                "   • API服务（注册、登录、客服、汽车商品展示、维修保养、销售预约、销售评价）",
                                "   • 后台系统（商品管理、用户管理、商品服务管理、订单管理、支付管理、第三方支付渠道管理、报表统计、客服管理、系统配置）",
                                "   • App使用WebView套壳网页实现App功能",
                                "开发环境架构：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技术负责：",
                                "1. 负责项目管理端后台系统服务搭建、技术选型、参与需求转化数据库表设计、开发环境搭建、后台系统服务业务功能开发实现",
                                "2. 引入Satoken+Redis轻量化框架实现权限、Lock4j+Redis分布式锁防重复提交、定时器实现客户预约自动销售分配自动短信通知自动通知栏推送",
                                "3. 后台集成极光推送客户端，实现群推定向推送功能，引入Skywalking实现服务性能监控、日志采集、告警，实现基于AOP的日志管理",
                                "4. App端WebView与前端混合开发，节约多端开发成本，集成常用App功能（支付宝SDK、微信SDK、极光SDK、OpenInstall SDK）实现后台推送手机消息、拉起支付、带参安装、安装下载统计、微信分享、地图导航"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "1. 管理バックエンドシステムのフロントエンド構築と業務実装",
                                "2. Android App WebViewハイブリッド開発、中古車販売サービスシステムとして、以下を含む：",
                                "   • 管理バックエンドシステム",
                                "   • APIサービス（登録、ログイン、カスタマーサービス、車両商品表示、メンテナンス、販売予約、販売評価）",
                                "   • バックエンドシステム（商品管理、ユーザー管理、商品サービス管理、注文管理、決済管理、第三者決済チャネル管理、レポート統計、カスタマーサービス管理、システム設定）",
                                "   • WebViewシェルを使用したアプリ機能の実装",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、Android SDK 29、Maven、Gradle、SVN",
                                "• SpringBoot、MyBatis-plus、Redis、Satoken",
                                "• MySQL、Lock4j、MinIO、Skywalking、Elasticsearch",
                                "技術担当：",
                                "1. 管理バックエンドシステムサービスの構築、技術選定、要件変換データベース設計、開発環境構築、バックエンドシステムサービス機能開発を担当",
                                "2. Satoken+Redis軽量フレームワークによる権限管理、Lock4j+Redis分散ロックによる重複送信防止、タイマーによる顧客予約の自動販売割り当てとSMS通知、通知バープッシュの実装",
                                "3. バックエンドにJPushクライアントを統合してグループ指向プッシュ機能を実現、Skywalkingを導入してサービス性能監視、ログ収集、アラート、AOPベースのログ管理を実装",
                                "4. App側WebViewとフロントエンドのハイブリッド開発によるマルチエンド開発コストの削減、一般的なアプリ機能（Alipay SDK、WeChat SDK、JPush SDK、OpenInstall SDK）を統合してバックエンドプッシュ通知、決済起動、パラメータ付きインストール、インストールダウンロード統計、WeChat共有、地図ナビゲーションを実現"
                            ]
                        },
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
                ]
            },
            huawei: {
                name: {
                    en: "華為（成都研究所） - Java開発者",
                    zh: "华为（成都研究所） - Java开发",
                    ja: "華為（成都研究所） - Java開発者"
                },
                period: "2016.12-2020.01",
                location: "成都",
                description: {
                    en: "Participated in the development and maintenance of multiple important Huawei projects",
                    zh: "参与华为多个重要项目的开发和维护工作",
                    ja: "華為の複数の重要プロジェクトの開発とメンテナンスに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Huawei AIFlow Algorithm Training Platform",
                            zh: "华为AIFlow算法训练平台",
                            ja: "華為AIFlowアルゴリズム訓練ラットフォーム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Development of AIFlow algorithm training platform under Huawei 2012 Lab, implementing online training platform for machine learning and deep learning",
                            zh: "华为2012实验室下的AIFlow算法训练平台开发，实现机器学习和深度学习的在线训练平台",
                            ja: "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発、機械学習とディープラーニングのオンライン訓練プラットフォームを実現"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab, implementing online training platform for machine learning and deep learning",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "Technical Responsibilities:",
                                "1. Backend deep learning management implementation - Task module (Redis delayed queue scanner auto-start tasks), Training module (training template selection from different systems (TensorFlow, Caffe), training mode acquisition, MongoDB dataset JSON retrieval), Dataset module, One-click log batch import implementation for fast search",
                                "2. Deep learning task scheduling service implementation - Thread pool multi-threaded task scheduling, delayed task scheduling implementation",
                                "3. Mail service resource approval - MQ task message queue for resource approval, email sending based on task message types (deep learning, machine learning, multi-machine) using email templates"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，实现机器学习和深度学习的在线训练平台",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "技术职责：",
                                "1. 后端深度学习管理功能实现-任务模块（redis延迟队列扫描器自动启动任务）、训练模块（不同系统（Tensorflow、Caffe）训练模板选择、训练模式获取、mongodb数据集json获取）、数据集模块、一键启动日志批量导入实现快速检索",
                                "2. 深度学习任务调度服务实现-线程池多线程处理任务调度、延迟任务调度实现",
                                "3. 邮件服务审批资源-mq任务消息队列审批资源、根据任务消息类型（深度、机器、多机）邮件模板发送实现邮件发送"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発、機械学習とディープラーニングのオンライン訓練プラットフォームを実現",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "技術担当：",
                                "1. バックエンド深層学習管理機能実装-タスクモジュール（redis遅延キュースキャンター自動起動タスク）、トレーニングモジュール（異なるシステム（Tensorflow、Caffe）からトレーニングテンプレート選択、トレーニングモード取得、mongodbデータセットjson取得）、データセットモジュール、1キー起動ログバッチインポート実装による高速検索",
                                "2. 深層学習タスクスケジューリングサービス実装-スレッドプール複数スレッド処理タスクスケジューリング、遅延タスクスケジューリング実装",
                                "3. メールサービス承認リソース-mqタスクメッセージキューによる承認リソース、タスクメッセージ種別（深層、機械、複数機）に基づくメールテンプレート送信によるメール送信"
                            ]
                        },
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
                        title: {
                            en: "Huawei India Telecom BA Base Station System",
                            zh: "华为印度电信商BA基站系统",
                            ja: "華為インド通信事業者BA基地局システム"
                        },
                        type: {
                            en: "Backend Development",
                            zh: "后端开发",
                            ja: "バックエンド開発"
                        },
                        description: {
                            en: "Base station management system built for Huawei's Indian telecom customer, managing and analyzing the operational status of equipment under Huawei operators",
                            zh: "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态",
                            ja: "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム、華為の通信事業者配下の機器運用状態を管理・統計"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Base station management system built for Huawei's Indian telecom customer, integrating inventory, maintenance, and personnel management for base station equipment.",
                                "Development Environment & Architecture:",
                                "• JDK1.7, Virtual Cloud Desktop, Maven, SVN",
                                "• Spring MVC, MyBatis, MQ, Redis",
                                "• JSP, Bootstrap",
                                "Technical Responsibilities:",
                                "1. Backend module implementation - Base station data aggregation timer for batch JSON data import, AOP encryption/decryption",
                                "2. Performance optimization for online issues, slow SQL query optimization, daily bug fixes",
                                "3. Database sharding and partial code refactoring"
                            ],
                            zh: [
                                "项目背景：",
                                "该系统是华为无线部门为华为客户印度电信商搭建的使用华为设备基站管理系统，管理统计华为运营商下设备运营状态，集库存、修理、责任人一体化统计管理基站设备。",
                                "开发环境架构：",
                                "• JDK1.7、虚拟云桌面、Maven、SVN",
                                "• SpringMVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技术负责：",
                                "1. 后台新增模块实现-基站数据信息汇总定时器拉取json数据批量入库，aop加解密",
                                "2. 处理线上性能故障进行性能调优、处理慢sql、修改日常bug",
                                "3. 数据库分表，部分代码重构"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為の無線部門が華為のインド通信事業者顧客向けに構築した基地局管理システム。在庫、修理、責任者の一体化統計管理を含む基地局設備の運用状態を管理・統計。",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.7、仮想クラウドデスクトップ、Maven、SVN",
                                "• Spring MVC、MyBatis、MQ、Redis",
                                "• JSP、Bootstrap",
                                "技術担当：",
                                "1. バックエンド新規モジュール実装 - 基地局データ情報集計タイマーによるJSONデータ一括インポート、AOP暗号化/復号化",
                                "2. オンラインパフォーマンス問題の最適化、低速SQLクエリの最適化、日常的なバグ修正",
                                "3. データベースシャーディングと部分的なコードリファクタリング"
                            ]
                        },
                        technologies: [
                            "Spring MVC",
                            "MyBatis",
                            "Redis",
                            "RabbitMQ",
                            "JSP",
                            "Bootstrap",
                            "Maven",
                            "SVN"
                        ]
                    }
                ]
            },
            gameCompany: {
                name: {
                    en: "2K GAME - QA Engineer",
                    zh: "2K GAME - QA工程师",
                    ja: "2K GAME - QAエンジニア"
                },
                period: "2016.08-2016.09",
                location: "成都",
                description: {
                    en: "Participated in testing multiple famous games in 2K GAME's testing department",
                    zh: "参与2K GAME测试部门的多款知名游戏测试工作",
                    ja: "2K GAMEのテスト部門に参加し、複数の有名ゲームのテスト作業を担当"
                },
                projects: [
                    {
                        title: {
                            en: "2K Games Testing Projects",
                            zh: "2K游戏测试项目",
                            ja: "2Kゲームテストプロジェクト"
                        },
                        type: {
                            en: "Game Testing",
                            zh: "游戏测试",
                            ja: "ゲームテスト"
                        },
                        description: {
                            en: "Participated in testing multiple AAA titles including Mafia II, Civilization Mobile, NBA 2K series, and Borderlands",
                            zh: "参与多款知名游戏的测试工作，包括黑手党2、文明手游、NBA 2K系列、无主之地等",
                            ja: "マフィアII、シヴィライゼーションモバイル、NBA 2Kシリーズ、ボーダーランズなど、複数の有名ゲームのテストに参加"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "2K GAMEテスト部門の一員として、複数の有名ゲームのテスト作業に参加",
                                "• マフィアII",
                                "• シヴィライゼーションモバイル",
                                "• NBA 2Kシリー",
                                "• ボーダーランズ",
                                "主な役割：",
                                "1. 機能テストとバグフィードバック",
                                "2. ゲーム性能テスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ],
                            zh: [
                                "项目背景：",
                                "作为2K GAME测试部门的一员，参与多款知名游戏的测试工作",
                                "• 黑手党2",
                                "• 文明手游",
                                "• NBA 2K系列",
                                "• 无主之地",
                                "主要职责：",
                                "1. 功能测试与bug反馈",
                                "2. 游戏性能测试",
                                "3. 用户体验评估",
                                "4. 测试报告编写"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "2K GAMEテスト部門のメンバーとして、複数の有名ゲームのテストに参加",
                                "• マフィアII",
                                "• シヴィライゼーョンモバイル",
                                "• NBA 2Kシリー",
                                "• ボーダーランズ",
                                "主な役割：",
                                "1. 機能テストとバグフィードバック",
                                "2. ゲーム性能テスト",
                                "3. ユーザーエクスペリエンス評価",
                                "4. テストレポート作成"
                            ]
                        },
                        technologies: [
                            "ゲームテスト",
                            "バグトラッキング",
                            "パフォーマンステスト",
                            "ユーザーエクスペリエンステスト"
                        ]
                    }
                ]
            },
            microlight: {
                name: {
                    en: "Microlight Technology (Chengdu) - Layout Engineer",
                    zh: "成都微光科技 - 版图工程师",
                    ja: "成都マイクロライトテクノロジー - レイアウトエンジニア"
                },
                period: "2015.08-2016.08",
                location: "成都",
                description: {
                    en: "Participated in analog layout design and verification of multiple chips",
                    zh: "参与多个芯片的模拟版图设计与验证工作",
                    ja: "複数のチップのアナログレイアウト設計と検証作業に参加"
                },
                projects: [
                    {
                        title: {
                            en: "Chip Layout Design Projects",
                            zh: "芯片版图设计项目",
                            ja: "チップレイアウト設計プロジェクト"
                        },
                        type: {
                            en: "IC Layout Design",
                            zh: "集成电路版图设计",
                            ja: "集積回路レイアウト設計"
                        },
                        description: {
                            en: "Multiple chip layout design and verification projects based on HLMC 40nm/55nm process",
                            zh: "基于华力微电子40nm/55nm工艺的多个芯片版图设计与验证项目",
                            ja: "HLMC 40nm/55nmプロセスに基づく複数のチップレイアウト設計と検証プロジェクト"
                        },
                        details: {
                            en: [
                                "Project Content:",
                                "1. Shanghai Huali Microelectronics 40nm Process PR Digital Cell Library Analog Layout Design",
                                "2. Beidou Xiaolajiao Mobile Phone Fingerprint Chip Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout design and verification of fingerprint chip oscillator module",
                                "   • Conducted circuit simulation and performance verification",
                                "   • Ensured design meets fingerprint recognition performance requirements",
                                "3. HD Camera Sensor Project:",
                                "   • Based on HLMC 55nm process",
                                "   • Responsible for analog layout implementation of 16MP/4MP/2MP pixel sensors",
                                "   • Conducted DRC/LVS verification and parameter extraction",
                                "   • Ensured design meets image capture performance metrics"
                            ],
                            zh: [
                                "项目内容：",
                                "1. 上海华力微电子40nm工艺PR数字单元库模拟版图设计",
                                "2. 北斗小辣椒手机指纹芯片项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责指纹芯片振荡器模块的模拟版图设计与验证",
                                "   • 进行电路仿真和性能验证",
                                "   • 确保设计满足指纹识别的性能要求",
                                "3. 高清摄像头传感器项目：",
                                "   • 基于华力微电子55nm工艺",
                                "   • 负责1600w/400w/200w像素传感器的模拟版图实现",
                                "   • 进行DRC/LVS验证和参数提取",
                                "   • 确保设计满足图像采集的性能指标"
                            ],
                            ja: [
                                "プロジェクト内容：",
                                "1. 上海華力マイクロエレクトロニクス40nmプロセスPRデジタルセルライブラリアナログレイアウト設計",
                                "2. 北斗シャオラージャオ携帯電話指紋チッププロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 指紋チップ発振器モジュールのアナログレイアウト設計と検証を担当",
                                "   • 回路シミュレーションと性能検証を実施",
                                "   • 指紋認識の性能要件を満たす設計を確保",
                                "3. HDカメラセンサープロジェクト：",
                                "   • HLMC 55nmプロセスに基づく",
                                "   • 1600万/400万/200万画素センサーのアナログレイアウト実装を担当",
                                "   • DRC/LVS検証とパラメータ抽出を実施",
                                "   • 画像キャプチャの性能指標を満たす設計を確保"
                            ]
                        },
                        technologies: [
                            "Cadence Virtuoso",
                            "55nm工艺",
                            "40nm工艺",
                            "模拟版图设计",
                            "DRC/LVS",
                            "电路仿真"
                        ]
                    }
                ]
            },
            university: {
                name: {
                    en: "University of Electronic Science and Technology of China, Chengdu College",
                    zh: "电子科技大学成都学院",
                    ja: "電子科技大学成都学院"
                },
                period: "2011.09-2015.08",
                location: "成都",
                description: {
                    en: "Bachelor of Electronic Science and Technology (Microelectronics)",
                    zh: "电子科学技术（微电子）学士",
                    ja: "電子科学技術（マイクロエクトロニクス）学士"
                }
            },
            semiconductor: {
                name: {
                    en: "Chengdu Semiconductor - Analog Circuit Engineer",
                    zh: "成都半导体 - 模拟电路工程师",
                    ja: "成都半導体 - アナログ回路エンジニア"
                },
                period: "2014.03-2014.11",
                location: "成都",
                description: {
                    en: "Participated in implementation, verification and simulation of analog circuit power module for Apple camera sensor (Sony IMX series) on Fujitsu 50nm process",
                    zh: "参与富士通50nm工艺的苹果相机传感器（索尼IMX系列）模拟电路电源模块的实现、验证和仿真",
                    ja: "富士通50nmプロセスでのAppleカメラセンサー（ソニーIMXシリーズセンサー）のアナログ回路電源モジュールの実装、検証、シミュレーションに参加"
                },
                projects: [
                    {
                        title: {
                            en: "Sony IMX220 Camera Sensor Power Module",
                            zh: "索尼IMX220摄像传感器芯片电源模块",
                            ja: "ソニーIMX220カメラセンサー電源モジュール"
                        },
                        type: {
                            en: "Analog Circuit Design",
                            zh: "模拟电路设计",
                            ja: "アナログ回路設計"
                        },
                        description: {
                            en: "Power management module design and verification for Sony IMX220 camera sensor (iPhone 6 12MP) based on Fujitsu 50nm process",
                            zh: "基于富士通50nm工艺，为索尼IMX220摄像传感器芯片（iPhone 6摄像头1200W）进行电源管理模块的设计与验证",
                            ja: "富士通50nmプロセスに基づき、ソニーIMX220カメラセンサーチップ（iPhone 6カメラ1200万画素）の電源管理モジュールの設計と検証"
                        },
                        details: {
                            en: [
                                "Project Background:",
                                "Development of AIFlow algorithm training platform under Huawei 2012 Lab. Main features include:",
                                "• Online algorithm editing with Jupyter for machine learning & deep learning",
                                "• Training resource (servers, GPU, CPU) application, approval, creation, execution, monitoring, and log retrieval",
                                "• Additional core services (data annotation service, data cleaning service, dataset retrieval service)",
                                "• Support for TensorFlow & Caffe framework computation",
                                "• Support for multi-machine multi-GPU task training",
                                "",
                                "Development Environment & Architecture:",
                                "• JDK1.8, Virtual Cloud Desktop, Git, DevCloud iSource",
                                "• Spring Cloud, Nacos, Gateway, MyBatis-Plus",
                                "• RabbitMQ, Redis, MongoDB, Elasticsearch",
                                "",
                                "Technical Responsibilities:",
                                "1. Backend Deep Learning Management Implementation:",
                                "   • Task module with Redis delayed queue timer scanning for automatic task initiation",
                                "   • Training module supporting different systems (TensorFlow, Caffe) for template selection and training mode",
                                "   • Dataset module with MongoDB integration",
                                "   • One-click log batch import to Elasticsearch for quick retrieval",
                                "",
                                "2. Deep Learning Task Scheduling Service:",
                                "   • Thread pool multi-threading for task scheduling",
                                "   • Delayed task scheduling implementation",
                                "",
                                "3. Email Service Resource Approval:",
                                "   • MQ task message queue binding",
                                "   • Task message consumption and email dispatch based on type (deep learning, machine learning, multi-machine multi-GPU)",
                                "   • Email template-based notifications to relevant stakeholders"
                            ],
                            zh: [
                                "项目背景：",
                                "华为2012实验室下的AIFlow算法训练平台开发，平台主要功能：",
                                "• 机械&深度学习jupter在线算法编辑",
                                "• 训练任务资源（服务器、GPU、CPU）申请、审批、创建、运行、监控、日志检索",
                                "• 包含其他的主要业务(数据标注服务、数据清洗服务、数据集检索服务)",
                                "• 支持可选TensorFlow&Caffe框架运算",
                                "• 支持多机多卡任务训练",
                                "",
                                "开发环境架构：",
                                "• JDK1.8、虚拟云桌面、Git、DevCloud iSource",
                                "• SpringCloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "技术负责：",
                                "1. 后台深度学习管理功能实现：",
                                "   • 任务模块（redis延迟队列定时器扫描自动开启任务）",
                                "   • 训练模块（实现不同系统（Tensorflow、Caffe）获取训练模板选择训练模式，获取mongodb数据集json）",
                                "   • 数据集模块",
                                "   • 一键运行日志批量导入es实现快速检索",
                                "",
                                "2. 实现深度学习任务调度服务：",
                                "   • 线程池多线程处理任务调度",
                                "   • 延迟任务调度实现",
                                "",
                                "3. 邮件服务审批资源：",
                                "   • 绑定mq任务消息队列",
                                "   • 消费任务消息根据类型（深度、机器、多机多卡）根据邮件模板发送邮件到相关负责人"
                            ],
                            ja: [
                                "プロジェクト背景：",
                                "華為2012研究所のAIFlowアルゴリズム訓練プラットフォームの開発。主な機能：",
                                "• 機械学習とディープラーニングのJupyter オンラインアルゴリズム編集",
                                "• トレーニングリソース（サーバー、GPU、CPU）の申請、承認、作成、実行、監視、ログ検索",
                                "• その他の主要サービス（データアノテーションサービス、データクリーニングサービス、データセット検索サービス）",
                                "• TensorFlow & Caffeフレームワークの計算をサポート",
                                "• マルチマシン・マルチGPUタスクトレーニングをサポート",
                                "",
                                "開発環境・アーキテクチャ：",
                                "• JDK1.8、仮想クラウドデスクトップ、Git、DevCloud iSource",
                                "• Spring Cloud、Nacos、Gateway、MyBatis-Plus",
                                "• RabbitMQ、Redis、MongoDB、Elasticsearch",
                                "",
                                "術担当：",
                                "1. バックエンドディープラーニング管理機能の実装：",
                                "   • タスクモジュール（Redis遅延キュースキャンター自動タスク）",
                                "   • トレーニングモジュール（TensorFlow、Caffeなど異なるシステムのトレーニングテンプレート選択とトレーニングモード、MongoDBデータセットJSONの取得）",
                                "   • データセットモジュール",
                                "   • ワンクリックログ一括インポートとElasticsearchによる高速検索",
                                "",
                                "2. ディープラーニングタスクスケジューリングサービスの実装：",
                                "   • スレッドプールマルチスレッドによるタスクスケジューリング",
                                "   • 遅延タスクスケジューリングの実装",
                                "",
                                "3. メールサービスリソース承認：",
                                "   • MQタスクメッセージキューのバインド",
                                "   • タスクメッセージの消費とタイプ（ディープラーニング、機械学習、マルチマシン・マルチGPU）に基づく関係者へのメールテンプレート送信"
                            ]
                        },
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
                    }
                ]
            }
        }
    }
}; 