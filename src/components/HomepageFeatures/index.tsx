import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

// 首页展示
const FeatureList: FeatureItem[] = [
    {
        title: '408备考中',
        Svg: require('@site/static/img/homepage-01.svg').default,
        description: (
            <>
                记录408考研学习中...（闭关修炼内功）
            </>
        ),
    },
    {
        title: '主要还是后端',
        Svg: require('@site/static/img/homepage-02.svg').default,
        description: (
            <>
                励志成为全栈开发的独立游戏开发者（PS：笑死 😆）
            </>
        ),
    },
    {
        title: '持续学习，持续成长',
        Svg: require('@site/static/img/homepage-03.svg').default,
        description: (
            <>
                终生学习！看更多的风景，认识更多的人
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
