export const update_serial = async (req: any, res: any) => {
    try {

        let toUpdate :any = []
        let data :any = req.body

        for (let index = 0; index < data.length; index++) {
            let tempData = {}
            let element = data[index];
            element.order = index
            tempData = element

            await Page.findByIdAndUpdate(data[index]._id, tempData);
            
            toUpdate.push(tempData)
        }

        // const updateQueries = [];
        // toUpdate.forEach(async (item : any) => {
        // updateQueries.push({
        //     updateOne: {
        //     filter: { _id: item._id },
        //     update: { order: item.order },
        //     },
        // });
        // });

        

        // await Page.findByIdAndUpdate(id, to_update);
        

        res.json(toUpdate);
    } catch (err: any) {
        logger.error(NAMESPACE, 'Create Pages error', err);
        res.status(500).json(formatError(err));
    }
};