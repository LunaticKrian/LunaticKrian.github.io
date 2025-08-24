import {skillInfo, expertiseInfo} from "./data"
import React, {JSX} from "react";
import {Icon} from "@iconify/react";

/**
 * 定义接受数据结构
 */
interface SectionContainerProps {
    headerName: string;
    children: React.ReactNode;
}

/**
 * 模块组件
 *
 * @param headerName
 * @param children
 * @constructor
 */
export function SectionContainer({headerName, children}: SectionContainerProps) {
    return (
        <div style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        }}>
            <ModelHeader headerName={headerName}/>
            {children}
        </div>
    );
}

/**
 * 专栏头部
 */
export function ModelHeader(props: { headerName: string }) {
    return (
        <div style={{color: "#505050", fontSize: 24, fontWeight: 800, marginBottom: "12px"}}>
            <span>
                <Icon style={{marginRight: "8px", color: "#505050"}} icon="mdi:square" width="18"/>
            </span>
            <span>{props.headerName}</span>
        </div>
    )
}

/**
 * 技能列表
 */
export function SkillItem(): JSX.Element {

    return (
        <ul>
            {skillInfo.map((item, idx) => (
                <li style={{marginBottom: '6px'}}>
                    <span style={{fontWeight: 600, color: "#505050"}}>{item.skillName}</span>
                    <span>{item.skillDescription}</span>
                </li>
            ))}
        </ul>
    )
}

/**
 * 个人优势
 */
export function ExpertiseInfo() {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <ul>
                {expertiseInfo.map((item, idx) => (
                    <li style={{marginBottom: '6px'}}>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "100px",
            }}>
                <div style={{
                    width: 120,
                    height: 120,
                    background: "#e4e4e4",
                    borderRadius: "50%",
                    opacity: 0.7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5d5d5d",
                    fontWeight: 700,
                    fontSize: 18,
                    marginRight: -30,
                    zIndex: 1,
                }}>
                    团队合作
                </div>
                <div style={{
                    width: 150,
                    height: 150,
                    background: "#888",
                    borderRadius: "50%",
                    opacity: 0.8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d1d1d1",
                    fontWeight: 700,
                    fontSize: 22,
                    zIndex: 2,
                }}>
                    全栈开发
                </div>
                <div style={{
                    width: 120,
                    height: 120,
                    background: "#e4e4e4",
                    borderRadius: "50%",
                    opacity: 0.7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5d5d5d",
                    fontWeight: 700,
                    fontSize: 18,
                    marginLeft: -30,
                    zIndex: 1,
                }}>
                    问题解决
                </div>
            </div>

        </div>
    )
}