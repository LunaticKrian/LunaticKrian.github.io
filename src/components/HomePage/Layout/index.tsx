import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import SkillsInfo from "@site/src/components/HomePage/Skills";

/**
 * 首页组件
 */
export default function HomePage() {


    return (
        <div className={styles.container}>
            {/*左侧个人介绍*/}
            <div className={styles.leftContent}>

                {/*个人标题*/}
                <div className={[styles.title, styles.animateUp].join(" ")}>
                    Hi，这里是
                    <span className={styles.highlight}>
                        &nbsp;百成&nbsp;
                    </span>
                    👋
                 </div>

                {/*个人简介*/}
                <div className={[styles.description, styles.animateUpDelay05].join(" ")}>
                    在这里我会分享各个技术栈的学习内容和过程中遇到的所有问题和解决方案，了解最新的技术栈以及实际开发中如何应用，希望我的开发经历对你有所启发。
                </div>

                {/*个人技能*/}
                <div className={[styles.skills, styles.animateUpDelay10].join(" ")}>
                    <SkillsInfo/>
                </div>

                {/*首页按钮*/}
                <div className={[styles.buttonContent, styles.animateUpDelay15].join(" ")}>
                    <Link to="/about">
                        <button className={styles.buttonInfo}>
                            关于我
                        </button>
                    </Link>
                </div>
            </div>

            {/*右侧动画展示*/}
            <div className={styles.rightContent}>
                <img className={styles.homeMainImg} src="/img/homepage/homepage.gif" alt=""/>
            </div>

        </div>
    );
}