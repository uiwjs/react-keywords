import { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';

export default (conf: Configuration, env: 'production' | 'development', options: LoaderConfOptions) => {
  if (options.bundle) {
    conf.output!.library = 'react-keywords';
    conf.externals = {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    };
  }
  return conf;
};
