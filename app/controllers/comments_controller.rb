class CommentsController < ApplicationController
    before_action :set_feature

    def create

        @feature = Feature.find_by(id: params[:feature_id])
            if @feature.nil?
            render json: { error: 'Feature not found' }, status: :not_found
            return
        end
        @comment = @earthquake.comments.build(comment_params)

        if @comment.save
          render json: @comment, notice: ('.created')
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
    end

    private

    def set_earthquake
        render json: { error: 'earthquake not found' }, status: :not_found unless @earthquake
    end
    
    def comment_params
        params.require(:comment).permit(:body)
    end

    def earthquake 
        @eartquake = Earthquake.find(params[:earthquake_id])
    end

end