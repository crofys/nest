/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-11-20 17:22:34
 * @LastEditTime: 2019-11-27 15:13:15
 * @LastEditors: 徐长剑
 */
enum ETypes {
  DEBUG = '\x1B[34m%s\x1B[39m',
  LOG = '\x1B[36m%s\x1B[39m',
  INFO = '\x1B[32m%s\x1B[39m',
  WARN = '\x1B[33m%s\x1B[39m',
  ERROR = '\x1B[31m%s\x1B[39m',
}

const { log, warn, info, debug, error } = console;
interface Log extends Console {
  success(message?: any, ...optionalParams: any[]): void;
}
const Log = {
  ...console,
  debug(...arg: any[]) {
    return debug(ETypes.DEBUG, '[DEBUG]', ...arg);
  },
  log(...arg: any[]) {
    log(ETypes.LOG, '[LOG]', ...arg);
  },
  warn(...arg: any[]) {
    warn(ETypes.WARN, '[WARN]', ...arg);
  },
  info(...arg: any[]) {
    info(ETypes.INFO, '[INFO]', ...arg);
  },
  error(...arg: any[]) {
    error(ETypes.ERROR, '[ERROR]', ...arg);
  },
};

export default Log;
