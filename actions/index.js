
export function ReceiveData(receive){
  return {
    type: 'RECEIVE_DATA',
    domain:receive.domain, 
    host:receive.host,
    mail:receive.mail,
    name: receive.name,
    phone: receive.phone,
    balance: receive.balance,
    status:receive.status,
    regDate:receive.regDate,
    type_domain:receive.type_domain
  }
}
