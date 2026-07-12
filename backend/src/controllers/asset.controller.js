import * as assetService from "../services/asset.service.js";

console.log("Controller loaded. assetService =", assetService);

export const getAssets = async (req,res) => {
    try {
        const assets = await assetService.getAssets(req.query);

        res.status(200).json({
            success: true,
            data: assets,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}