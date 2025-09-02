import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// 定义背景图片随机数组
const backgroundImages = [
    '/img/homepage/background-01.png',
    '/img/homepage/background-02.png',
    '/img/homepage/background-03.png',
    '/img/homepage/background-04.png',
];

// 首页组件
function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    // 随机选择一个背景图片
    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{
            backgroundImage: `url(${randomBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                {/*<div className={styles.buttons}>*/}
                {/*    <Link*/}
                {/*        className="button button--secondary button--lg"*/}
                {/*        to="/about">*/}
                {/*        交个朋友吧，也许只需要 - 5min ⏱️*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </header>
    );
}

// 首页展示组件
export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Lunatice 百成 的个人博客，记录学习、工作、生活中的点点滴滴。">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
