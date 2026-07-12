import * as assetRepository from "../repositories/asset.repository.js";

export const getAssets = async (filters) => {
    return await assetRepository.getAssets(filters);
}