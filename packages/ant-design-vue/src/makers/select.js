import {creatorTypeFactory} from '@xl-form-create/core';

const name = 'select';

export default {
    selectMultiple: creatorTypeFactory(name, 'multiple', 'mode'),
    selectTags: creatorTypeFactory(name, 'tags', 'mode'),
    selectCombobox: creatorTypeFactory(name, 'combobox', 'mode'),
};
