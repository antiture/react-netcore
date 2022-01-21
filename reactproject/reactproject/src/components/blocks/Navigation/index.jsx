import React from "react"
import "./index.less"
import CtrlTabs from "../../controls/CtrlTabs"




export default class Navigation extends React.Component {
    render() {
        return (
            <div className="Navigation">
                <CtrlTabs>
                    <div name="first" className="ctn-main">
                        1
                    </div>
                    <div name="second" className="ctn-main">
                        2
                    </div>
                    <div name="third" className="ctn-main">
                        3
                    </div>
                    <div name="third" className="ctn-main">
                        4
                    </div>
                    <div name="third" className="ctn-main">
                        5
                    </div>
                    <div name="name" className="ctn-main">
                        6
                    </div>
                </CtrlTabs>
            </div>
        )
    }
}
