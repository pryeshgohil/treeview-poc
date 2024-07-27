
function toggleByKey(key){
    if ($(`.treeview-element[data-parent-key=${key}]`).length > 0) {
        $(`.treeview-element[data-parent-key=${key}]`).toggleClass('d-none');

        let newKey = $(`.treeview-element[data-parent-key=${key}]`).data('key');
        toggleByKey(newKey)
    }
}
$(".toggle").on('click', function(obj, e) {
    let key = $(this).parent().data('key');

    $(this).toggleClass('treeview-element-expanded');
    toggleByKey(key);
})

$(".toggle").each(function(e) {
    let key = $(this).parent().data('key');
    let indent_level = $(this).parent().attr('indent-level');

    if (indent_level){
        let numberOfEnumerations = indent_level * 5;
        for(i = 0; i < numberOfEnumerations; i++){
            console.log()
            $(this).prepend("\xa0");
        }
    }
})