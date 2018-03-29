import PraiseButton from '../src/PraiseButton.js';

describe('点赞父类测试', function() {
    it('+1 测试', function() {
        const praiseButton = new PraiseButton();
        praiseButton.addOne();

        expect(praiseButton.praiseNumber).toBe(1);
    });

    it('++1 测试', function() {
        const praiseButton = new PraiseButton();
        praiseButton.addOne();
        praiseButton.addOne();

        expect(praiseButton.praiseNumber).toBe(2);
    });
});