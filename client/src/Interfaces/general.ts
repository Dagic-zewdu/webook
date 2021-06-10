export type objectData = { _id?: string | any, [prop: string]: any }
/**array of objects */
export type arrayObject = objectData[]
/**for created response */
export type createdRes = { created: Boolean, error: Boolean, message: any, data: any }
/**for updated resposnse*/
export type updatedRes = { Update: {}, updated: Boolean, error: Boolean }
//for deleted response
export type delRes = { deleted: boolean, error: boolean, message: any }
