class PraiseButton {
    //构造函数
    constructor(initNum = 0) {
        this.praiseNum = initNum;
    }
    addOne() {
        this.praiseNum += 1;
        this.onChange(this.praiseNum);
    }

    onChange() {}

}
export default PraiseButton;