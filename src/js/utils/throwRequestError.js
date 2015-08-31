export default function throwRequestError(resp) {
	if (resp.error) throw resp.error
	return resp
}