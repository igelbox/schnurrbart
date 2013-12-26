function schnurrbart(template, model) {
    return template.replace(/{{([^}]+)}}/g, function(_, expression) {
        with (model)
            return eval(expression);
    });
}
