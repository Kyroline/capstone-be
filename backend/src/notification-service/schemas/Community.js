import { ObjectId } from 'mongodb'
import mongoose, { Schema } from 'mongoose'

const schema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        profile_picture: { type: String, default: null },
        banner_picture: { type: String, default: null },
        creator: { type: Schema.Types.ObjectId, ref: 'User' },
        member_count: { type: Number, default: 1 },
        post_count: { type: Number, default: 0 },
        keywords: [{ type: Schema.Types.ObjectId, ref: 'Keyword' }]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const Community = mongoose.model('Community', schema)

export default Community