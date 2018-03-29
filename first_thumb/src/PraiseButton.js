/**
 * PraiseButton
 */
class PraiseButton {
    //构造函数
    constructor(initNum = 0) {
        this.initNum = initNum;
    }
    addOne() {
        this.initNum += 1;
    }

}
export default PraiseButton;