function readForm(id, requiredAll) {
    const form = $('#' + id).serializeArray();
    let result = {};

    for (let i in form) {
        const item = form[i];
        if (!item.value) {
            if (requiredAll) return false;
        } else result[item.name] = item.value;
    }

    return result;
}