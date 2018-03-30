import PraiseButton from '../src/PraiseButton.js';

describe('点赞+1测试', function() {
    it('+1 测试', function() {
        const praiseButton = new PraiseButton();
        praiseButton.addOne(1);

        expect(praiseButton.praiseNum).toBe(1);
    });

});