import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomePage from "@site/src/components/HomePage/Layout";


// 首页展示组件
export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Lunatice 百成 的个人博客，记录学习、工作、生活中的点点滴滴。">

            {/*左右结构*/}
            <HomePage/>

            <main className={styles.animationFloat}>

            </main>
        </Layout>
    );
}
