export function isUUID(id: string) {
  return /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i.test(id)
}

export function isIpIn(str: string) {
  const normalReg = `((2(5[0-4]|[0-4]\\d)|1\\d{2}|\\d{1,2})\\.){3}(2(5[0-4]|[0-4]\\d)|1\\d{2}|\\d{1,2})`;
  try {
    return new RegExp(`(?<!\\d)${normalReg}(?!\\d)`).test(str);
  } catch (error) {
    // 不支持反向否定预查，降级
    return new RegExp(normalReg).test(str);
  }
}