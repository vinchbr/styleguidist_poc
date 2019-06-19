const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Apex Component Library Style Guide',
  components: glob.sync(path.resolve(__dirname, 'src/components/**/*.tsx')),
  ignore: glob.sync(path.resolve(__dirname, 'src/components/**/test/*.tsx')),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  
  sections: [
    {
      name: 'Description List',
      content: 'src/components/DescriptionList/DescriptionList.md'
    },
    {
      name: 'Input',
      content: 'src/components/Input/Input.md'
    }
  ]
};
