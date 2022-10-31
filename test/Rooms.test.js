const assert = require('chai').assert
const { describe,it } = require('mocha')
const rooms_service = require("../src/rooms.js")

describe( "Function: get_all_rooms", () =>
{
	it( "Should be defined", () =>
	{
		const is_function = typeof rooms_service.get_all_rooms === "function";
		assert.isTrue( is_function );
	});

	it( "Should return all the rooms", async() =>
	{
		try
		{
			const result = await rooms_service.get_all_rooms();
			assert.strictEqual( 10, result.length )
		}
		catch ( e )
		{
			assert.Throw( e );
		}
	});
});

describe( "Function: get_a_room", async() =>
{
	it( "Should be defined", () =>
	{
		const is_function = typeof rooms_service.get_a_room === "function";
		assert.isTrue( is_function );
	});

	it( "Should return a particular room cdetails given a room number", async() =>
	{
		try
		{
			const result = await rooms_service.get_a_room("1");
			assert.strictEqual( 1, result.length )
		}
		catch ( e )
		{
			assert.Throw( e );
		}
	});

	it( "Should return error response when given an invalid room number", async() =>
	{
		try
		{
			await rooms_service.get_a_room("11");
		}
		catch ( e )
		{
			assert.equal( e.Error,"Invalid room number");
		}
	});

});

describe( "Function: get_furniture_details", async() =>
{
	it( "Should be defined", () =>
	{
		const is_function = typeof rooms_service.get_furniture_details === "function";
		assert.isTrue( is_function );
	});

	it( "Should return furniture details as a object", async() =>
	{
		try
		{
			const result_three = await rooms_service.get_furniture_details("1");
			assert.equal("object", typeof result_three )
		}
		catch ( e )
		{
			assert.Throw( e );
		}
	});

	it( "Should return error response when given an invalid room number", async() =>
	{
		try
		{
			await rooms_service.get_furniture_details("11");
		}
		catch ( e )
		{
			assert.equal( e.Error,"Invalid room number");
		}
	});

});


