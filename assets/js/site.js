var Site        = {

    init            : function () {
        Site._setHovers();
        Site._setResources();
    },

    _setHovers      : function () {
        var item    = $( '.navigation-item .item-img' ),
            img     = $( '.navigation-item img' ),
            link;
        item.height( img.height() );
        $( '.navigation-item .link-center' ).css({
            bottom  : ( img.height() ) / 2
        });

        $( '.navigation-item' ).hover( function ( e ) {
            $( '.item-hover', e.currentTarget ).slideToggle( function () {
                link    = $( '.link-center.first', e.currentTarget );
                link.css({
                    bottom  : ( img.height() - link.height() ) / 2,
                    opacity : 1
                }).removeClass( 'first' );
            });
        });

        $( '.navigation-item .item-hover' ).click( function ( e ) {
            window.location.href    = $( 'a', $( e.currentTarget ).parent().next() ).attr( 'href' );
        });
    },

    _setResources   : function () {
        var item    = $( '.resource-item .item' );
        item.height( item.width() );

        $( '.resource-item' ).hover( function ( e ) {
            $( '.item-hover', e.currentTarget ).slideToggle();
        });
    }
};

$( 'document' ).ready( Site.init );