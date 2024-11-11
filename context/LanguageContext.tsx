import { createContext, useContext, useState, ReactNode } from 'react';

// 定义语言类型
export type LanguageKey = 'en' | 'zh' | 'ja';

// 定义 Context 类型
type LanguageContextType = [LanguageKey, (lang: LanguageKey) => void];

// 创建 Context
export const LanguageContext = createContext<LanguageContextType>(['zh', () => { }]);

// 创建 Provider 组件
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<LanguageKey>('zh');

    return (
        <LanguageContext.Provider value={[lang, setLang]}>
            {children}
        </LanguageContext.Provider>
    );
}

// 创建自定义 hook
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
} 