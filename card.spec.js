describe('Tests for the card class', () => {
    it('should sort cards in order of their certification number', () => {
        let cards = [
            new GradedCard(1965, 'Topps', '1965 Topps', 250, 'Willie Mays', 'PSA', '6', '69683158', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/UquW7P2Yv0qrT3dULv41sg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/YTk_a4fPJEqQEudsAlr8Lg.jpg', true),
            new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/9Lz9EJNkUU-0ut5gtBhkeg.jpg', true),
            new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/kMfM2yjrjE2q0AJNQU2OCA.jpg', false)
        ];
        cards.sort(GradedCard.compareCertification);

        expect(cards[0].certificationNumber).toEqual('67733031');
        expect(cards[1].certificationNumber).toEqual('69683152');
        expect(cards[2].certificationNumber).toEqual('69683158');
    });

    it('should sort cards in order of their year', () => {
        let cards = [
            new GradedCard(1965, 'Topps', '1965 Topps', 250, 'Willie Mays', 'PSA', '6', '69683158', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/UquW7P2Yv0qrT3dULv41sg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/YTk_a4fPJEqQEudsAlr8Lg.jpg', true),
            new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/9Lz9EJNkUU-0ut5gtBhkeg.jpg', true),
            new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/kMfM2yjrjE2q0AJNQU2OCA.jpg', false)
        ];
        cards.sort(GradedCard.compareYear);

        expect(cards[0].year).toEqual(1958);
        expect(cards[1].year).toEqual(1963);
        expect(cards[2].year).toEqual(1965);
    });
});