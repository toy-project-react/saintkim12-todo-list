const STATUS_MAP = {
	0: '미완료',
	1: '완료'
}
const convertStatusList = Object.entries(STATUS_MAP).map(([status, text]) => ({ status: status, text }))

export { STATUS_MAP, convertStatusList as STATUS_LIST }