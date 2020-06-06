<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'data' => $this->collection->transform(function ($page) {
                return [
                    'id' => $page->id,
                    'title' => $page->title,
                    'body' => $page->body,
                    'created_at' => $page->created_at,
                ];
            }),
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }
}
