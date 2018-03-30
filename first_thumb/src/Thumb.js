import PraiseButton from './PraiseButton.js'

class Thumb extends PraiseButton {
    constructor(seletor) {
        super();
        this.numTipNode = $(`<div>当前次数：<span>${this.praiseNum}</span></div>`);
        this.initNode = $(`<div class="thumbUp">
            <div class="thumb">
                ${Array(4).fill('<span class="thumb_item"></span>').join('')}
            </div>
        </div>`);
        this.node = this.initNode.clone();
        $(seletor).append(this.node.prepend(this.numTipNode));
        this.node.on('click', this.addOne.bind(this));
    }

    onChange(num) {
        this.numTipNode.find('span').text(num);
    }




}

export default Thumb;